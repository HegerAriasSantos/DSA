class Nodo {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.before = null;
	}
}
class LinkedList {
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

class Stack {
	constructor() {
		this.length = 0;
		this.items = new LinkedList();
	}
	//Removes all objects from the Stack.
	Clear() {
		let arr = [];
		while (this.length !== 0) {
			arr.push(this.Pop());
		}
		return arr;
	}
	//Returns the object at the top of the Stack without removing it.
	Peek() {
		return this.items.head.data;
	}
	//Removes and returns the object at the top of the Stack.
	Pop() {
		this.length--;
		let firstElement = this.items.head.data;
		this.items.shift();
		return firstElement;
	}
	//Inserts an object at the top of the Stack.
	Push(data) {
		this.length++;
		this.items.unshift(data);
	}
}

/*  lifo (Last In First out) 
|    |	
|    |  
|    |
|  2 |
|  1 |
|  0 |
______
*/
// 3

let stack = new Stack();
stack.Push(1);
stack.Push(2);
stack.Push(3);
stack.Push(4);
stack.Push(5);

console.log(stack.Pop());

console.log(stack.Clear());

const sum = (ValueA, ValueB) => {
	console.log(ValueA + ValueB);
};

sum(5, 2);
