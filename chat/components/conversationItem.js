class ConversationItem {
    constructor (index) {
        this.$container = document.createElement('div');

        this.$name = document.createElement('h4');
        this.$name.innerText = `Conversation ${index}`;
        this.$name.setAttribute(
            'class',
            'h-16 rounded p-4 mb-2 text-xl shadow shadow-gray-400 cursor-pointer hover:bg-lime-400 hover:text-white'
        );
        // this.$name.addEventListener('click',); 

    }

    render () {
        this.$container.appendChild(this.$name);

        return this.$container;
    }
}

export default ConversationItem;