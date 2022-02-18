class InputGroup {
    constructor (lableName, inputType, placeholder, warning) {
        this.$container = document.createElement('div');

        this.$lable = document.createElement('layer');
        this.$lable.innerText = lableName;
        this.$lable.setAttribute(
            'class', 
            'mb-3 text-xl'
        );

        this.$input = document.createElement('input');
        this.$input.type = inputType;
        this.$input.setAttribute(
            'class', 
            'w-full px-3 py-2 rounded-xl'
        );
        this.$input.placeholder = placeholder;

        this.$warning = document.createElement('p');
        this.$warning.innerText = warning;
        this.$warning.setAttribute(
            'class',
            'mx-4 mb-3 text-white text-sm invisible'
        );
    }

    getValue (){
        return this.$input.value;
    }

    setError (input,valid) {
        if (!input.match(valid)) {
            this.$input.classList.add(
                'focus:outline-none',
                'focus:ring',
                'focus:ring-red-400'
            );
            this.$warning.classList.replace('invisible','visible');
        }
        else {
            this.$input.classList.remove(
                'focus:outline-none',
                'focus:ring',
                'focus:ring-red-400'
            );
            this.$warning.classList.replace('visible','invisible');
        }
    }

    render () {
        this.$container.appendChild(this.$lable);
        this.$container.appendChild(this.$input);
        this.$container.appendChild(this.$warning);

        return this.$container;
    }
}

export default InputGroup;