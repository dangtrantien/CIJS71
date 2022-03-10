import { mockMessage } from "../acet/css/mockConversation.js";
import { query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { messageRef } from "../constants/commons.js"
import chatMessageItems from "./chatMessageItems.js";

class ChatMessageList {
    constructor () {
        this.$container = document.createElement('div');
        this.$container.setAttribute(
            'class',
            'h-4/5 overflow-y-hidden hover:overflow-y-scroll'
        );
    }

    onChat (currentConversationId) {
        // mockMessage.forEach((msg) => {
        //     const messageItems = new ChatMessageItems(msg);
        //     this.$container.appendChild(messageItems.render());
        // });
        const q = query(messageRef, where('conversationId', '==', currentConversationId));
        
        onSnapshot(q, (snapshot) => {
            const messages = [];

            snapshot.docChanges().forEach((change) => {
                if(change.type === 'added') {
                    messages.push(change.doc.data());
                } 
            });

            messages.sort((a,b) => a.createDate - b.createDate);
            messages.forEach((msg) => {
                const shouldScroll = this.$container.scrollTop + this.$container.clientHeight === this.$container.scrollHeight;
                const messageItem = new chatMessageItems(msg);
                this.$container.appendChild(messageItem.render());
                if (!shouldScroll) {
                    this.scrollToBottom();
                };
            });
        })
    }

    setConversationMessage (conversation) {
        this.onChat(conversation.conversationId);
    }
    
    scrollToBottom() {
        this.$container.scrollTop = this.$container.scrollHeight;
    }

    render () {
        return this.$container;
    }
}

export default ChatMessageList;