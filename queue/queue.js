class Queue {
    constructor() {
        this._box = [];
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
        this._box.shift()
        return this
    }
}
