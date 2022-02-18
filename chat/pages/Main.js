import ConversationList from "../components/conversationList.js";
import ChatContainer from "../components/chatContainer.js";

class Main {
    constructor () {
        this.$mainContainer = document.createElement('div');
        this.$mainContainer.setAttribute(
            'class',
            'flex'
        );

        this.$conversationList = new ConversationList();

        this.$chatContainer = new ChatContainer();
    }

    render (container) {
        this.$conversationList.render(this.$mainContainer);
        this.$chatContainer.render(this.$mainContainer);

        container.appendChild(this.$mainContainer);
    }
}

export default Main;