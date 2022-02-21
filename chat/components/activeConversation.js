import ConversationItem from "./conversationItem.js";

class ActiveConcersation {
    constructor (titleName) {
        this.$container = document.createElement('div');
        this.$container.setAttribute(
            'class',
            'flex h-1/6 justify-between px-4 items-center text-3xl border-b shadow'
        );
        
        this.$title = document.createElement('h4');
        this.$title.innerText = titleName;

        this.$member = document.createElement('h4');
        this.$member.innerText = '0 member';
    }
    render () {
        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$member);

        return this.$container;
    }
}

export default ActiveConcersation;