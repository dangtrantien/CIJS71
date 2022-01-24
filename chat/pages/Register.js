import RegisterGroup from "../components/registerGroup.js";

class Register {
    constructor () {
        this.$registerContainer = document.createElement('div');
        this.$registerContainer.setAttribute(
            'class', 
            'w-1/3 mx-auto mt-12 bg-sky-400 border-solid border-2 border-red-300 rounded-3xl py-8 px-6'
        );
        this.$registerContainer.addEventListener('submit', this.onSubmit);
        

        this.$displayName = new RegisterGroup(
            'Name',
            'name',
            'Enter your full name'
        );

        this.$email = new RegisterGroup(
            'Email',
            'email',
            'Enter your email'
        );

        this.$password = new RegisterGroup(
            'Password',
            'password',
            'Enter your password'
        );

        this.$confirmPassword = new RegisterGroup(
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
        // this.$registerBtn.addEventListener('submit', this.onSubmit);
    }

    test = () => {
        console.log('hello');
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log({
            name: "Tiến",
            email: "dangtrantien98@gmail.com",
            password: "123",
            confirmPassword: "123",
        });
    };

    render () {
        this.$registerContainer.appendChild(this.$displayName.render());
        this.$registerContainer.appendChild(this.$email.render());
        this.$registerContainer.appendChild(this.$password.render());
        this.$registerContainer.appendChild(this.$confirmPassword.render());
        this.$registerContainer.appendChild(this.$registerBtn);

        return this.$registerContainer;
    }
}

export default Register;