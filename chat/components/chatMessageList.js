
import { db } from "../constants/commons.js";
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
            
            if (msg.senderId === 'quang') {   
                messageItems.$container.classList.add('flex-row-reverse');
                messageItems.$messageTime.classList.add('flex-row-reverse')
            }
            else {
                messageItems.$userMessage.classList.add('bg-gray-100','text-gray-400');
            }
        });
    }

    setConversationMessage (conversation) {

    }

    render () {
        return this.$container;
    }
}

export default ChatMessageList;