import InputGroup from "./inputGroup.js";

class NewConversationModal {
    constructor () {
        this.$container = document.createElement('form');
        this.$container.setAttribute(
            'class',
            'hidden new-conversation-modal'
        );
        this.$container.addEventListener('submit', this.onSubmit);

        this.$email = new InputGroup(
            'Start a new conversation',
            'text',
            'Enter email address'
        );

        this.$submitBtn = document.createElement('button');
        this.$submitBtn.innerText = 'Create';
        this.$submitBtn.type = 'submit';
        this.$submitBtn.setAttribute(
            'class',
            'w-24 p-2 bg-amber-500 text-white rounded-xl hover:bg-orange-500'
        );
    }

    onSubmit = (e) => {
        e.preventDefault();
        const email = this.$email.getValue();
        if (!email) {
            alert ('Wrong email address');
        }
        else {
            console.log(email);
            this.$container.classList.add('hidden');
        }
    }

    render () {
        this.$container.appendChild(this.$email.render());
        this.$container.appendChild(this.$submitBtn);

        return this.$container;
    }
}

export default NewConversationModal;