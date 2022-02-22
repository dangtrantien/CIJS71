class ActiveConcersation {
    constructor () {
        this.$container = document.createElement('div');
        this.$container.setAttribute(
            'class',
            'flex h-1/6 justify-between px-4 items-center text-3xl border-b shadow'
        );
        
        this.$title = document.createElement('h4');

        this.$member = document.createElement('h4');
    }

    setConversationTitile (conversation) {
        this.$title.innerText = conversation.conversationName;
        this.$member.innerText = `${conversation.members.length} member`;
    }

    render () {
        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$member);

        return this.$container;
    }
}

export default ActiveConcersation;