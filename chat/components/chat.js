import InputGroup from "./inputGroup.js";

class Chat {
    constructor () {
        this.$container = document.createElement('div');
        this.$container.innerText = 'Chat message';
        this.$container.setAttribute(
            'class',
            'h-5/6 p-5'
        );

        this.$inputChat = new InputGroup(
            '',
            'text',
            'Add your message'
        );
        this.$inputChat.$input.classList.add('input-chat');
        this.$inputChat.$input.classList.remove('w-full');

        this.$sendBtn = document.createElement('button');
        this.$sendBtn.innerText = 'Send';
        this.$sendBtn.setAttribute('class', 'send-btn');

        this.$sendIcon = `<img src="https://img.icons8.com/material-sharp/24/ffffff/filled-sent.png"/>`
    }

    render () {
        this.$container.appendChild(this.$inputChat.render());
        this.$container.appendChild(this.$sendBtn);
        this.$sendBtn.insertAdjacentHTML('beforeend',this.$sendIcon);

        return this.$container;
    }
}

export default Chat;