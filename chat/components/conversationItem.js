class ConversationItem {
    constructor (conversation, activeConversation) {
        this._conversationInfo = conversation;
        this._setActiveConversation = activeConversation;

        this.$container = document.createElement('div');
        this.$container.addEventListener('click', this.setActiveConversaion);

        this.$name = document.createElement('h4');
        this.$name.innerText = conversation.conversationName;
        this.$name.setAttribute(
            'class',
            'h-16 rounded p-4 mb-2 text-xl shadow shadow-gray-400 cursor-pointer hover:bg-lime-400 hover:text-white'
        );
    }

    setActiveConversaion = () => {
        this._setActiveConversation(this._conversationInfo);
    }

    render () {
        this.$container.appendChild(this.$name);

        return this.$container;
    }
}

export default ConversationItem;