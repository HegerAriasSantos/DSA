class Nodo {
	constructor(data) {
		this.value = data;
		this.next = null;
		this.before = null;
	}
}

class DoublyLinkedList {
	constructor(nodeData) {
		this.head = new Nodo(nodeData);
		this.tail = this.head;
	}

	// add to the begin of list
	unshift(data) {
		if (this.head.value === null) {
			this.head.value = data;
			return;
		}
		let nodo = new Nodo(data);
		nodo.next = this.head;
		this.head.before = nodo;
		this.head = nodo;
	}

	// add to the end of list
	push(data) {
		if (this.head.value === null) {
			this.head.value = data;
			return;
		}
		let nodo = new Nodo(data);
		nodo.before = this.tail;
		this.tail.next = nodo;
		this.tail = nodo;
	}
	// delete to the end of list
	pop() {
		if (this.head.value === null) {
			return;
		}
		let current = this.tail;
		this.tail = current.before;
		current.before = null;
	}
	// delete to the begin of list
	shift() {
		if (this.head.value === null) {
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
			if (current.value === data) {
				return current;
			}
			index++;
			current = current.next;
		}
		return -1;
	}
	// it's getting a loop
	replace(value, newData) {
		let current = this.head;
		while (current.next !== null) {
			if (current.value === value) {
				current.value = newData;
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
		current.value = value;
	}
	// OPCIONAL!!
	invert() {
		let currentTail = this.tail;
		let currentHead = this.head;
		let auxiliarVariable;
		while (currentHead.next !== null) {
			auxiliarVariable = currentHead.value;
			currentHead.value = currentTail.value;
			currentTail.value = auxiliarVariable;

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
			str += `${nodoActual.value} <=> `;
			nodoActual = nodoActual.next;
		}

		str += `${nodoActual.value}`;

		console.log(str);
	}

	fromArray(arr) {
		arr.forEach(value => this.push(value));
		return this;
	}
	toArray() {
		const nodes = [];
		let currentNode = this.head;
		while (currentNode) {
			nodes.push(currentNode);
			currentNode = currentNode.next;
		}
		return nodes;
	}
}

const doubleList = new DoublyLinkedList(0);
doubleList.push(0);
doubleList.push(1);
doubleList.push(2);
doubleList.push(3);
doubleList.push(4);
// doubleList.tail.next = doubleList.head;
// doubleList.head.before = doubleList.tail;
console.log(
	doubleList.findLoop() ? "Yeah there's a loop" : "Nop there's not a loop",
);
