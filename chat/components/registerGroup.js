class RegisterGroup {
    constructor (name, input, placeholder) {
        this.$container = document.createElement('div');

        this.$layer = document.createElement('layer');
        this.$layer.innerText = name;
        this.$layer.setAttribute('class', 'mb-3 text-xl font-bold');

        this.$input = document.createElement('input');
        this.$input.type = input;
        this.$input.setAttribute('class', 'w-full mb-7 px-3 py-2 rounded-xl');
        this.$input.placeholder = placeholder;
    }

    render () {
        this.$container.appendChild(this.$layer);
        this.$container.appendChild(this.$input);

        return this.$container;
    }
}

export default RegisterGroup;