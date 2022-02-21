import ActiveConcersation from "./activeConversation.js";
import ChatInput from "./chatInput.js";
import ChatMessageList from "./chatMessageList.js";

class ChatContainer {
    constructor () {
        this.$chatContainer = document.createElement('div');
        this.$chatContainer.setAttribute(
            'class',
            'w-3/4 h-screen border flex flex-col'
        );
        
        this.$activeConversation = new ActiveConcersation('Active conversation');

        this.$chatMessage = new ChatMessageList();

        this.$chatInput = new ChatInput();
    }

    render (container) {
        this.$chatContainer.appendChild(this.$activeConversation.render());
        this.$chatContainer.appendChild(this.$chatMessage.render());
        this.$chatContainer.appendChild(this.$chatInput.render());

        container.appendChild(this.$chatContainer);
    }
}

export default ChatContainer;