class ChatMessageList {
    constructor () {
        this.$container = document.createElement('div');
        this.$container.innerText = 'Chat message';
        this.$container.setAttribute(
            'class',
            'flex flex-1'
        );
    }
    render () {
        return this.$container;
    }
}

export default ChatMessageList;