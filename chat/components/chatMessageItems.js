class ChatMessageItems {
    constructor (msg) {
        this.$container = document.createElement('div');
        this.$container.setAttribute(
            'class',
            'p-4'
        );

        this.$user = document.createElement('div');
        this.$user.setAttribute(
            'class',
            'flex w-4/5'
        );

        this.$userIcon = 
        `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="50" height="50"viewBox="0 0 172 172"style=" fill:#000000;">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#cccccc"><path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,37.9948 30.8052,68.8 68.8,68.8c37.9948,0 68.8,-30.8052 68.8,-68.8c0,-37.9948 -30.8052,-68.8 -68.8,-68.8zM45.86667,126.94173c6.6908,-20.06667 26.75747,-12.23493 30.1,-23.10533v-7.24693c-1.50213,-0.8084 -5.80787,-6.35827 -6.2608,-10.69267c-1.1868,-0.1032 -3.0444,-1.27853 -3.5948,-5.92827c-0.2924,-2.494 0.8772,-3.89867 1.5824,-4.34013c0,0 -1.76587,-4.0248 -1.76587,-8.02093c0.00573,-11.87947 5.88813,-21.7408 20.0724,-21.7408c7.65973,0 10.03333,5.42947 10.03333,5.42947c6.8456,0 10.03333,7.50493 10.03333,16.3056c0,4.386 -1.76587,8.02093 -1.76587,8.02093c0.71093,0.44147 1.88053,1.84613 1.58813,4.34013c-0.5504,4.64973 -2.408,5.82507 -3.5948,5.92827c-0.45293,4.3344 -4.75293,9.88427 -6.2608,10.69267v7.24693c3.34253,10.87613 23.4092,3.0444 30.1,23.11107c0,0 -15.00987,16.3916 -40.13333,16.3916c-25.2668,0 -40.13333,-16.3916 -40.13333,-16.3916z">
            </path></g></g>
            </svg>
        `;

        this.$userMessage = document.createElement('p');
        this.$userMessage.innerText = msg.content;
        this.$userMessage.setAttribute(
            'class',
            'w-fit px-4 py-2 text-white text-xl bg-lime-500 rounded-2xl'
        );

        this.$messageTime = document.createElement('div');
        // this.$time.innerText = new Date().toTimeString;
        this.$messageTime.innerText = '8:20 pm';
        this.$messageTime.setAttribute(
            'class',
            'text-sm text-gray-400 ml-14'
        );
    }

    render () {
        this.$container.appendChild(this.$user);
        this.$user.insertAdjacentHTML('afterBegin',this.$userIcon);
        this.$user.appendChild(this.$userMessage);
        this.$container.appendChild(this.$messageTime);

        return this.$container;
    }
}

export default ChatMessageItems;