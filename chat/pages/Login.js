import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { auth } from "../constants/commons.js";
import InputGroup from "../components/inputGroup.js";
import Register from "./Register.js";
import Main from "./Main.js";
import app from "../index.js";

class Login {
    constructor () {
        this.$loginContainer = document.createElement('form');
        this.$loginContainer.setAttribute(
            'class', 
            'w-1/3 mx-auto mt-12 bg-sky-400 border-solid border-2 border-red-300 rounded-3xl py-8 px-6'
        );
        this.$loginContainer.addEventListener('submit', this.onSubmit);

        this.$email = new InputGroup(
            'Email',
            'text',
            'Enter your email',
        );

        this.$password = new InputGroup(
            'Password',
            'password',
            'Enter your password'
        );

        this.$loginBtn = document.createElement('button');
        this.$loginBtn.type = 'submit';
        this.$loginBtn.innerText = 'Login';
        this.$loginBtn.setAttribute(
            'class', 
            'mt-8 mb-4 px-12 py-2 bg-orange-400 text-white text-xl rounded-xl hover:bg-red-500 hover:text-black'
        );

        this.$gotoRegisterPage = document.createElement('span');
        this.$gotoRegisterPage.type = 'submit';
        this.$gotoRegisterPage.innerHTML = "Need an account?";
        this.$gotoRegisterPage.setAttribute(
            'class',
            'ml-8 text-xl text-white italic hover:text-black cursor-pointer'
        );
        this.$gotoRegisterPage.addEventListener('click', this.gotoPage);
    }

    gotoPage = async () => {
        const registerScreen = new Register();
        app.setActiveScreen(registerScreen);
    }

    onSubmit = async (event) => {
        event.preventDefault();
        try{
            const email = this.$email.getValue();
            const password = this.$password.getValue();

            if (email && password) {
                const response = await signInWithEmailAndPassword(auth,email,password);
                const user = response.user;
                if (user) {
                    alert ('Login successfull');
                    const main = new Main();
                    activeScreen.setActiveScreen(main);
                }
            }
        }
        catch (error) {
            alert ('Wrong Email or Password', error);
        }
    }

    render (container) {
        this.$loginContainer.appendChild(this.$email.render());
        this.$loginContainer.appendChild(this.$password.render());
        this.$loginContainer.appendChild(this.$loginBtn);
        this.$loginContainer.appendChild(this.$gotoRegisterPage);

        container.appendChild(this.$loginContainer);
    }
}

export default Login;