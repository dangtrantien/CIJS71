import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { auth } from "../constants/commons.js";
import InputGroup from "../components/inputGroup.js";
import Login from "./Login.js";
import app from "../index.js";

class Register {
    constructor () {
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
            'text',
            'Enter your email',
            'Please provide a valid email address: email@example.com'
        );
        this.$email.$input.addEventListener('input', this.invalidEmail);

        this.$password = new InputGroup(
            'Password',
            'password',
            'Enter your password',
            'Use 8 or more characters, at least one number and first character must be a letter'
        );
        this.$password.$input.addEventListener('input', this.invalidPassword);

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

    invalidEmail = () => {
        const email = this.$email.getValue();
        let validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.$email.setError(email,validEmail);
    }

    invalidPassword = () => {
        const password = this.$password.getValue();
        let validPassword = /^[A-Za-z](?=.*\d)\w{7,}$/;
        
        this.$password.setError(password,validPassword);
    };

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
            
            const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const validPassword = /^[A-Za-z](?=.*\d)\w{7,}$/;
            
            if (!email.match(validEmail)) {
                alert ('Please provide a valid email');
            }

            else if (!password.match(validPassword)) {
                alert ('Please provide a valid password');
            }

            else if (password === confirmPassword) {
                const response = await createUserWithEmailAndPassword(auth, email, password);
                const user = response.user;
                    if (user) {
                        const loginScreen = new Login();
                        app.setActiveScreen(loginScreen);
                    }
            }
            else {
                alert ("Password dose not match");
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