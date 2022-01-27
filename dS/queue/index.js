// import ListaEnlazada from "../Linked_List/Double-LinkedList";
class Nodo {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.before = null;
	}
}
class ListaEnlazada {
	constructor() {
		this.head = new Nodo(null);
		this.tail = this.head;
	}

	// add to the begin of list
	unshift(data) {
		if (this.head.data === null) {
			this.head.data = data;
			return;
		}
		let nodo = new Nodo(data);
		nodo.next = this.head;
		this.head.before = nodo;
		this.head = nodo;
	}

	// add to the end of list
	push(data) {
		if (this.head.data === null) {
			this.head.data = data;
			return;
		}
		let nodo = new Nodo(data);
		nodo.before = this.tail;
		this.tail.next = nodo;
		this.tail = nodo;
	}
	// delete to the end of list
	pop() {
		if (this.head.data === null) {
			return;
		}
		let current = this.tail;
		this.tail = current.before;
		current.before = null;
	}
	// delete to the begin of list
	shift() {
		if (this.head.data === null) {
			return;
		}
		let current = this.head;
		this.head = current.next;
		current.next = null;
		return current;
	}
	//there's nothing to say about this :V
	insertAtIndex(index, data) {
		let current = this.head;
		let nodo = new Nodo(data);
		for (let i = 0; i == index - 1; i++) {
			current = current.next;
		}
		nodo.next = current.next;
		current.next = nodo;

		current.before = nodo;
	}
	// this neither
	removeAtIndex(index) {
		let current = this.head;
		for (let i = 0; i === index - 1; i++) {
			current = current.next;
		}
		let nodoToDelete = current.next;
		let nodoAfterToDelete = nodoToDelete.next;
		current.next = nodoToDelete.next;
		nodoAfterToDelete.before = nodoToDelete.before;
		nodoToDelete.next = null;
		nodoToDelete.before = null;
	}
	// again XD
	find(data) {
		let index = 0;
		let current = this.head;
		while (current.next !== null) {
			if (current.data === data) {
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	}
	// it's getting a loop
	replace(value, data) {
		let current = this.head;
		while (current.next !== null) {
			if (current.data === value) {
				current.data = data;
				return true;
			}
			current = current.next;
		}
		return false;
	}
	//the method's name is predicate :V
	replaceAtIndex(index, value) {
		let current = this.head;
		for (let i = 0; i === index; i++) {
			current = current.next;
		}
		current.data = value;
	}

	// OPCIONAL!!
	invert() {
		let currentTail = this.tail;
		let currentHead = this.head;
		let auxiliarVariable;
		while (currentHead.next !== null) {
			auxiliarVariable = currentHead.data;
			currentHead.data = currentTail.data;
			currentTail.data = auxiliarVariable;

			currentHead = currentHead.next;
			currentTail = currentTail.before;
		}
		this.imprimir();
	}

	findLoop() {
		let turtle = this.head;
		let hare = this.head.next;
		while (turtle.next !== null || hare.next !== null) {
			if (turtle === hare) return true;
			turtle = turtle.next;
			hare = hare.next;
			if (hare.next === null) return false;
			hare = hare.next;
		}
		return false;
	}

	imprimir() {
		let str = "";
		let nodoActual = this.head;

		while (nodoActual.next != null) {
			str += `${nodoActual.data} <=> `;
			nodoActual = nodoActual.next;
		}

		str += `${nodoActual.data}`;

		console.log(str);
	}
}
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
