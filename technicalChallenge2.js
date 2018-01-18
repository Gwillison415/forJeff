class Stack {
  constructor() {
    this._arr = [];
  }

  push(item){
    this._arr.push(item)
  }

  pop() {
    return this._arr.pop();
  }

  length() {
    return this._arr.length;
  }
}

class Queue {

  constructor(item) {
    // this.item = item;
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  }
  enqueue(item) {
    this.stack1.push(item)
  }

  dequeue () {
    if (!this.stack2.length()) { // only if stack2 is
      while (this.stack1.length()) {  // call this multiple times in each
        let val = this.stack1.pop() //take last val
        this.stack2.push(val) // pushing it onto front of stack2
      }
    }
    return this.stack2.pop()
  }
}

module.exports = Queue;
