// class Stack {
//     /**
//      * Создает стопку, опционально принимая элементы для добавления
//      * @param {...*} [items] Добавляемые элементы
//      */
//     constructor() {}

//     /**
//      * Возвращает количество элементов в стопке
//      * @returns {number}
//      */
//     get size() {}

//     /**
//      * Возвращает `true` если стопка пустая, и `false` если стопка не пустая
//      * @returns {boolean}
//      */
//     get isEmpty() {}

//     /**
//      * Добавляет элемент в стопку
//      * @param {*} item
//      */
//     push() {}

//     /**
//      * Удаляет элемент из стопки и возвращает его
//      * @returns {*}
//      */
//     pop() {}

//     /**
//      * Возвращает последний элемент в стопке не удаляя его
//      * @returns {*}
//      */
//     peek() {}
// }
class Stack {
    constructor(...elem){
        this._stack = [];
        elem.forEach((e)=>this._stack.push(e))
    };

    get size() {
        return this._stack.length

    }

    get isEmpty() {
        return this.size === 0 ? true : false
    }

    push(param) {
        this._stack.push(param)
    }

    pop() {
        return this._stack.pop()
    }

    peek() {
        let lastElem = this._stack.length-1
        return this._stack[lastElem]
    }
};

module.exports = Stack;