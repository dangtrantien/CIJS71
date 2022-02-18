import ActiveConcersation from "./activeConversation.js";
import Chat from "./chat.js";

class ChatContainer {
    constructor () {
        this.$chatContainer = document.createElement('div');
        this.$chatContainer.setAttribute(
            'class',
            'w-3/4 h-screen border'
        );
        
        this.$activeConversation = new ActiveConcersation('Active conversation');

        this.$chat = new Chat();
    }

    render (container) {
        this.$activeConversation.render(this.$chatContainer);
        this.$chatContainer.appendChild(this.$chat.render());

        container.appendChild(this.$chatContainer);
    }
}

export default ChatContainer;