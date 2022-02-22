import { mockMessage } from "../acet/css/mockConversation.js";
import ChatMessageItems from "./chatMessageItems.js";

class ChatMessageList {
    constructor () {
        this.$container = document.createElement('div');
        this.$container.setAttribute(
            'class',
            'h-4/5 overflow-y-hidden hover:overflow-y-scroll'
        );
        
        this.onChat();
    }

    onChat () {
        mockMessage.forEach((msg) => {
            const messageItems = new ChatMessageItems(msg);
            this.$container.appendChild(messageItems.render());
        });
    }

    setConversationTitile (conversation) {
        this.$container.innerText = conversation.conversationName;
    }

    render () {
        return this.$container;
    }
}

export default ChatMessageList;