

export default class Tab{
    /**
     * Создает вкладку.
     * @param {{ element: HTMLElement, onActivate: Function }} args
     */
    constructor({element, onActivate= ()=>{}}) {
        this._element = element;
        this._onActivate = onActivate;
        this.init = this.init.bind(this)
        
        this.init();
        
    }

    /**
     * Инициализирует объект.
     * Устанавливает свойство акивности вкладки.
     * Устанавливает обработчик для обработки нажатия на элемент.
     * @private
     */
    init() {
        this._active = true;
        this._element.addEventListener('click', this.handleClick.bind(this))
        console.log()
    }

    /**
     * Возвращает HTML элемент.
     * @returns {HTMLElement}
     */
    get element() {
        return this._element
    }

    /**
     * Возвращает ID вкладки.
     * ID вкладки берется из атрибута `hash` у элемента (`#panel-1` => `panel-1`)
     * @returns {string}
     */
    get id() {
        return this.element.hash.substring(1)
    }

    /**
     * `get` - Возвращает `true` или `false` в зависимости от того активна вкладка или нет.
     * 
     * `set` - Устанавливает активность вкладки, добавляя или удаляя соответствующий класс
     * @returns {boolean}
     */
    get isActive() {
        return /active/.test(this._element.classList.value)
    }

    set isActive(value) {
        this._active = value;
        if(value === true){
            this._element.classList.add('active')
        }
        else{
            this._element.classList.remove('active')
        };     
    }

    /**
     * Вызывается при нажатии на вкладку.
     * 
     * Устанавливает активность вкладки.
     * Вызывает функцию обратно вызова, отправляя туда ссылку на текущий объект, т.е. саму вкладку.
     * @private
     * @param {Event} event 
     */
    handleClick(event) {
        this.isActive = true;
        this._onActivate(this);
    }
}