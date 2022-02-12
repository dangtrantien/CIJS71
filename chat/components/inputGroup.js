class InputGroup {
    constructor (lableName, inputType, placeholder, invalid) {
        this.$container = document.createElement('div');

        this.$lable = document.createElement('layer');
        this.$lable.innerText = lableName;
        this.$lable.setAttribute(
            'class', 
            'mb-3 text-xl font-bold'
        );

        this.$input = document.createElement('input');
        this.$input.type = inputType;
        this.$input.setAttribute(
            'class', 
            'w-full px-3 py-2 rounded-xl peer'
        );
        this.$input.placeholder = placeholder;

        this.$warning = document.createElement('p');
        this.$warning.innerText = invalid;
        this.$warning.setAttribute(
            'class',
            'mx-4 mb-3 text-white text-sm invisible peer-invalid:visible'
        );
    }

    getValue(){
        return this.$input.value;
    }

    render () {
        this.$container.appendChild(this.$lable);
        this.$container.appendChild(this.$input);
        this.$container.appendChild(this.$warning);

        return this.$container;
    }
}

export default InputGroup;