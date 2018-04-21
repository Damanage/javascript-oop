class Stack {
    constructor(){
        this._stack = [];
    };

    get size() {
        return this._stack.length

    }

    get isEmpty() {
        return !this.size ? true : false
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
