import RegisterGroup from "../components/registerGroup.js";

class Register {
    constructor () {
        this.$app = document.createElement('div');
        this.$app.setAttribute('class', 'w-1/3 mx-auto mt-12 bg-sky-400 border-solid border-2 border-red-300 rounded-3xl py-8 px-6');

        this.$displayName = new RegisterGroup(
            'Name',
            'displayName',
            'Enter your full name'
        )

        this.$email = new RegisterGroup(
            'Email',
            'email',
            'Enter your email'
        )

        this.$password = new RegisterGroup(
            'Password',
            'password',
            'Enter your password'
        )

        this.$confirmPassword = new RegisterGroup(
            'Confirm Password',
            'confirmPassword',
            'Confirm your password'
        )

        this.$login = document.createElement('button');
        this.$login.innerText = 'Register';
        this.$login.setAttribute('class', 'mt-8 mb-4 px-12 py-2 bg-orange-400 text-white text-xl rounded-xl hover:bg-red-500 hover:text-black')
    }

    render () {
        this.$app.appendChild(this.$displayName.render());
        this.$app.appendChild(this.$email.render());
        this.$app.appendChild(this.$password.render());
        this.$app.appendChild(this.$confirmPassword.render());
        this.$app.appendChild(this.$login);

        return this.$app;
    }
}

export default Register;