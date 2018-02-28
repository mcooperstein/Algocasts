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
    
  }
}

module.exports = { Node, LinkedList };
