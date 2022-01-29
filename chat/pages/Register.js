import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { auth } from "../constants/commons.js";
import InputGroup from "../components/inputGroup.js";
import Login from "./Login.js";
import app from "../index.js";

class Register {
    constructor() {
        this.$registerContainer = document.createElement('form');
        this.$registerContainer.setAttribute(
            'class',
            'w-1/3 mx-auto mt-12 bg-sky-400 border-solid border-2 border-red-300 rounded-3xl py-8 px-6'
        );
        this.$registerContainer.addEventListener('submit', this.onSubmit);

        this.$displayName = new InputGroup(
            'Name',
            'text',
            'Enter your full name'
        );

        this.$email = new InputGroup(
            'Email',
            'email',
            'Enter your email'
        );

        this.$password = new InputGroup(
            'Password',
            'password',
            'Enter your password'
        );

        this.$confirmPassword = new InputGroup(
            'Confirm Password',
            'password',
            'Confirm your password'
        );

        this.$registerBtn = document.createElement('button');
        this.$registerBtn.type = 'submit';
        this.$registerBtn.innerText = 'Register';
        this.$registerBtn.setAttribute(
            'class',
            'mt-8 mb-4 px-12 py-2 bg-orange-400 text-white text-xl rounded-xl hover:bg-red-500 hover:text-black'
        );

        this.$gotoLoginPage = document.createElement('span');
        this.$gotoLoginPage.innerHTML = 'Already have an account?';
        this.$gotoLoginPage.setAttribute(
            'class',
            'ml-8 text-xl text-white italic hover:text-black cursor-pointer'
        );
        this.$gotoLoginPage.addEventListener('click', this.gotoPage);
    }

    gotoPage = () => {
        const loginScreen = new Login();
        app.setActiveScreen(loginScreen);
    }

    onSubmit = async (event) => {
        event.preventDefault();
        try {
            const email = this.$email.getValue();
            const password = this.$password.getValue();
            const confirmPassword = this.$confirmPassword.getValue();

            if (password === confirmPassword) {
                const response = await createUserWithEmailAndPassword(auth, email, password);
                const user = response.user;
                    if (user) {
                        const loginScreen = new Login();
                        app.setActiveScreen(loginScreen);
                    }
            }
            else {
                alert ("Passwords do not match");
            }
        }
        catch (error) {
            alert ('Something wrong', error)
        }
    }

    render (container) {
        this.$registerContainer.appendChild(this.$displayName.render());
        this.$registerContainer.appendChild(this.$email.render());
        this.$registerContainer.appendChild(this.$password.render());
        this.$registerContainer.appendChild(this.$confirmPassword.render());
        this.$registerContainer.appendChild(this.$registerBtn);
        this.$registerContainer.appendChild(this.$gotoLoginPage);

        container.appendChild(this.$registerContainer);
    }
}

export default Register;