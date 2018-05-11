const Input = require('../input/');

class Checkbox extends Input {
    /**
     * @param {{ tag: string, id: string, className: string, type: string, name: string, disabled: boolean, required: boolean, checked: boolean }} args 
     */
    constructor({ checked = false, ...args }) {
        super();
        this.tag = tag;
        this.id  = id;
        this.className = className;
        this.type = type;
        this.name = name;
        this.disabled = true;
        this.required = true;
        this.checked = true;
    }

    /**
     * `get` - Возвращает значение элемента.
     * 
     * `set` - Устанавливает значение элемента и сообщает слушателям о событии `change`.
     * 
     * @returns {boolean}
     */
    get checked() {  }
    set checked(value) {  }

    /**
     * Проверяет валидность значения
     * @returns {boolean}
     */
    get isValid() {
        
    }
}

module.exports = Checkbox;