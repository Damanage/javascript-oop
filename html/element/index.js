const EventEmitter = require('../event-emitter');

class Element extends EventEmitter {
    /**
     * @param {{ tag: string, id: string, className: string }} args
     */
    constructor({ tag, id, className = '' }) {
        super()
        this.tag = tag;
        this.id = id;
        this.classGroup = className.split(' ')
    }

    /**
     * Возвращает строку с названиями CSS классов.
     * 
     * @returns {string}
     */
    get className() {
        return this.classGroup.join(' ')
    }

    /**
     * Добавляет CSS класс.
     * 
     * @param {string} className 
     */
    addClass(className) {
        if(!this.hasClass(className))(this.classGroup.push(className))      
    }

    /**
     * Удаляет CSS класс.
     * 
     * @param {string} className 
     */
    removeClass(className) {
        this.classGroup = this.classGroup.filter( e => e !== className)
    }

    /**
     * Возращает `true` или `false` в зависимости от начилия CSS класса.
     * 
     * @param {string} className
     * @returns {boolean}
     */
    hasClass(className) {
        return this.classGroup.some( element => {return element === className} );
    }

    /**
     * Добавляет или удаляет CSS класс в зависимости от его наличия.
     * 
     * @param {string} className 
     */
    toggleClass(className) {
        if(this.hasClass(className)){
            this.removeClass(className)
        }
        else{
            this.addClass(className)
        }
    }
}

module.exports = Element;