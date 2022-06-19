const ListaEnlazada = require("../Linked_List/Double-LinkedList");

class queue {
  constructor() {
    this.length = 0;
    this.items = new ListaEnlazada();
  }

  // add element to begin of the queue
  enqueue(data) {
    this.items.unshift(data);
    this.length++;
  }
  // delete and return the last element of the queue
  dequeue() {
    let lastElement = this.items.tail.data;
    this.items.pop();
    this.length--;
    return lastElement;
  }
  //return the last element of the queue without remove it
  peek() {
    return this.items.tail.data;
  }
  //return the number of element that the queue have
  size() {
    return this.length;
  }
}

/* fifo (First in First out)

        -------------
        4  3  2  1  0                
        -------------
      	

*/

let Queue = new queue();

Queue.enqueue(1);
Queue.enqueue(2);
Queue.enqueue(3);
Queue.enqueue(4);
Queue.enqueue(5);

while (Queue.length !== 0) {
  console.log(Queue.dequeue());
}
