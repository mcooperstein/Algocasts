// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor(){
    this.datastore = [];
  }
  push(record){
    this.datastore.push(record);
  }
  pop(){
    return this.datastore.pop();
  }
  peek(){
    return this.datastore[this.datastore.length-1];
  }
}

module.exports = Stack;
