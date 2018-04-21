// class Queue {
//     /**
//      * Создает очередь, опционально принимая элементы для добавления
//      * @param {...*} [items] Добавляемые элементы
//      */
//     constructor() {}

//     /**
//      * Возвращает количество элементов в очереди
//      * @returns {number}
//      */
//     get size() {}

//     /**
//      * Возвращает `true` если очередь пустая, в противном случае возвращает `false`
//      * @returns {boolean}
//      */
//     get isEmpty() {}

//     /**
//      * Возвращает первый элемент в очереди
//      * @returns {*}
//      */
//     get front() {}

//     /**
//      * Возвращает последний элемент в очереди
//      * @returns {*}
//      */
//     get back() {}

//     /**
//      * Добавляет элемент в очередь
//      * @param {*} item 
//      */
//     enqueue() {}

//     /**
//      * Удаляет первый элемент из очереди и возвращает его
//      * @returns {*}
//      */
//     dequeue () {}
// }
class Queue {
    constructor(...elem) {
        this._box = [];
        elem.forEach((e)=>this._box.push(e))
    }

    get size() {
        return this._box.length
    }

    get isEmpty() {
        return !this.size ? true : false
    }

    get front() {
        return this._box[0]
    }

    get back() {
        let index = this.size-1
        return this._box[index]
    }

    enqueue(param) {
        this._box.push(param)
        return this
    }

    dequeue () {
        return this._box.shift()
        
    }
}
module.exports = Queue;