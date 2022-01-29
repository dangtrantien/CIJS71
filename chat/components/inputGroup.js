class InputGroup {
    constructor (lableName, inputType, placeholder) {
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
            'w-full mb-7 px-3 py-2 rounded-xl'
        );
        this.$input.placeholder = placeholder;
    }

    getValue(){
        return this.$input.value;
    }

    render () {
        this.$container.appendChild(this.$lable);
        this.$container.appendChild(this.$input);

        return this.$container;
    }
}

export default InputGroup;