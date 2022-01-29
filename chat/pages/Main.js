import { signOut } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { auth } from "../constants/commons.js";

class Main {
    constructor () {
        this.$mainContainer = document.createElement('div');

        this.$title = document.createElement('h1');
        this.$title.innerHTML = 'Welcome to Chat';

        this.$logoutBtn = document.createElement('button');
        this.$logoutBtn.innerHTML = 'Log out';
        this.$logoutBtn.setAttribute(
            'class', 
            'mt-8 mb-4 px-12 py-2 bg-orange-400 text-white text-xl rounded-xl hover:bg-red-500 hover:text-black'
        );
        this.$logoutBtn.addEventListener('click', this.signOut);
    }

    signOut = () => {
        signOut (auth).then((response) => {
            if (response) {
                alert ('You have been signed out');
            }
        })
        .catch ((error) => {
            alert ('Something wrong', error);
        })
    }

    render (container) {
        this.$mainContainer.appendChild(this.$title);
        this.$mainContainer.appendChild(this.$logoutBtn);

        container.appendChild(this.$mainContainer);
    }
}

export default Main;