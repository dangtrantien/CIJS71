class ConversationItem {
    constructor (conversation) {
        this.$container = document.createElement('div');

        this.$name = document.createElement('h4');
        this.$name.innerText = conversation.conversationName;
        this.$name.setAttribute(
            'class',
            'h-16 rounded p-4 mb-2 text-xl shadow shadow-gray-400 cursor-pointer hover:bg-lime-400 hover:text-white'
        );
    }

    render () {
        this.$container.appendChild(this.$name);

        return this.$container;
    }
}

export default ConversationItem;