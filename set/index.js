// class Set {
//     /**
//      * Создает сет, опционально принимая элементы для добавления
//      * @param {...*} [items] Добавляемые элементы
//      */
//     constructor() {
        
//     }

//     /**
//      * Возвращает количество элементов в сете
//      * @returns {number}
//      */
//     get size() {
        
//     }

//     /**
//      * Возвращает массив элементов сета
//      * @returns {Array}
//      */
//     get values() {
        
//     }

//     /**
//      * Добавляет элемент в сет
//      * @param {*} item
//      */
//     add() {
        
//     }

//     /**
//      * Проверяет наличие элемента в сете
//      * @param {*} item
//      * @returns {boolean}
//      */
//     has() {
        
//     }

//     /**
//      * Удаляет элемент из сета и возвращает `true` если элемент удален и `false` если нет
//      * @param {*} item
//      * @returns {boolean}
//      */
//     remove() {
        
//     }

//     /**
//      * Удаляет все элементы в сете
//      */
//     clear() {
        
//     }

//     /**
//      * Возращает сет состоящий из элементов двух сетов
//      * @param {Set} set
//      * @returns {Set}
//      */
//     union() {
        
//     }

//     /**
//      * Возращает сет состоящий из элементов которые присутствуют в обоих сетах
//      * @param {Set} set
//      * @returns {Set}
//      */
//     intersection() {
        
//     }

//     /**
//      * Возращает сет состоящий из элементов присутствующих в первом сете, и отсутствующих во втором
//      * @param {Set} set
//      * @returns {Set}
//      */
//     difference() {
        
//     }

//     /**
//      * Возвращает `true` если сет содержит в себе все элементы из друого сета
//      * @param {Set} set
//      * @returns {boolean}
//      */
//     isSubset() {
        
//     }
// }
class Set {
    constructor(...elem){
        this._box = [];
        elem.forEach((e)=>this._box.push(e))
    }

    get size() {
        return this._box.length;
    }

    get values() {
        return this._box
    }

    add(param) {
        if(Array.isArray(param)){
            let sub_box = this._box.concat(param);
            sub_box.forEach((e)=>{
                !this.has(e) && this._box.push(e)
            })
        }
        else{
            !this.has(param) && this._box.push(param)
        }
        return this
    }

    remove(param) {
        let index = this._box.indexOf(param);
        if(this.has(param)){
            this._box.splice(index, 1)
            return true
        }
        return false
    }

    has(param) {
        return (this._box.indexOf(param) !== -1)
    }

    clear() {
        this._box = []
        return this
    }

    union(array1) {
        let firstSet = this.values.concat(array1.values),
            megaSet = new Set;
        megaSet.add(firstSet);
        return megaSet;
    }

    intersection(param) {
        let megaSet = new Set;
        param.values.forEach((wookie)=>{
            this.has(wookie) && megaSet._box.push(wookie)
        })
        return megaSet;
    }

    difference(param) {
        let megaSet = new Set;
        this.values.forEach((wookie)=>{
            !param.has(wookie) && megaSet.add(wookie)
        })
        return megaSet
    }

    isSubset(param) {
        let counter = 0;

        this.values.forEach((wookie)=>{
            param.has(wookie) && counter++
        })

        if(counter === this.size)
            return true
        return false
    }
};

module.exports = Set;