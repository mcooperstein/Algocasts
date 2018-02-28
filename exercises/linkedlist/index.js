// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  // if no next value given, defaults to null
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insertFirst(data){
    // const node = new Node(data, this.head);
    // this.head = node;
    this.head = new Node(data,this.head);
  }
  size(){
    //return the number of nodes in the linked list
    let counter = 0;
    let node = this.head;

    while(node){
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst(){
    return this.head;
  }
  getLast(){
    if(!this.head){
      return null;
    }
    let node = this.head;
    while(node){
      if(!node.next){
        return node;
      }
      node = node.next;
    }
    return node;
  }
  clear(){
    this.head = null;
  }
  removeFirst(){
    let head = this.head;
    this.head = head.next;
  }
  removeLast(){
    if(!this.head){
      return;
    } else if(!this.head.next){
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while(node.next){
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data){
    let node = this.getLast()
    if(!node){
      this.head = new Node(data)
    } else {
      node.next = new Node(data)
    }
  }
  getAt(index){
    // if(!this.head){
    //   return null;
    // }
    let node = this.head;
    let counter = 0;
    while(node){
      if(counter===index){
        return node;
      }
      counter++;
      node=node.next;
    }
    return null;
  }
  removeAt(index){
    // My solution
    // if(index>=this.size()){
    //   return null;
    // } else if(index===0){
    //   if(length===1){
    //     this.head = null;
    //   } else {
    //     this.head = this.head.next;
    //   }
    // } else {
    //   let previous = this.getAt(index-1);
    //   previous.next = this.getAt(index).next;
    // }
    // Instructor solution
    if(!this.head){
      return;
    }
    if(index==0){
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index-1);
    if(!previous || !previous.next) {
      return null;
    }
    previous.next = previous.next.next;
  }
  insertAt(data, index){
    if(!this.head){
      this.head = new Node(data);
      return;
    }
    if(index===0){
      this.head = new Node(data, this.getAt(index));
      return;
    } else if(index>this.size()){
      this.insertLast(data);
    } else {
      let previous = this.getAt(index-1);
      previous.next = new Node(data,previous.next);
    }
  }
  forEach(fn){
    let node = this.head;
    let counter = 0;
    while(node){
      fn(node,counter);
      node = node.next;
      counter++;
    }
  }
  //generator function
  *[Symbol.iterator](){
    let node = this.head;
    while(node){
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
