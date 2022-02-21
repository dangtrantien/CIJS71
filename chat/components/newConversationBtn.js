class NewConversationBtn {
    constructor (conversationModalContainer) {
        this._conversationModalContainer = conversationModalContainer;

        this.$container = document.createElement('button');
        this.$container.innerText = 'New conversation';
        this.$container.setAttribute(
            'class',
            'flex rounded p-2 shadow shadow-gray-400 text-lime-500 hover:bg-lime-300 hover:text-white'
        );
        this.$container.addEventListener('click', this.visible);

        this.$pencilSVG = 
        `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        `;
    }

    visible = () => {
        this._conversationModalContainer.toggle('hidden');
    }

    render () {
        this.$container.insertAdjacentHTML('afterbegin', this.$pencilSVG);

        return this.$container;
    }
}

export default NewConversationBtn;