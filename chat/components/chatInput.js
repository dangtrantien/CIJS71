import { db } from "../constants/commons.js";

class ChatInput {
    constructor () {
        this.$container = document.createElement('form');
        this.$container.addEventListener('submit', this.onSubmit);

        this.$inputChat = document.createElement('input');
        this.$inputChat.type = 'text';
        this.$inputChat.placeholder = 'Add your message';
        this.$inputChat.setAttribute(
            'class', 
            'w-full h-12 my-4 px-6 rounded-3xl bg-lime-200'
        );

        this.$sendBtn = document.createElement('button');
        this.$sendBtn.innerText = 'Send';
        this.$sendBtn.setAttribute(
            'class', 
            'send-btn'
        );

        this.$sendIcon = `<img src="https://img.icons8.com/material-sharp/24/ffffff/filled-sent.png"/>`
    }

    onSubmit = (e) => {
        e.preventDefault();
        
    }

    render () {
        this.$container.appendChild(this.$inputChat);
        this.$container.appendChild(this.$sendBtn);
        this.$sendBtn.insertAdjacentHTML('beforeend',this.$sendIcon);

        return this.$container;
    }
}

export default ChatInput;