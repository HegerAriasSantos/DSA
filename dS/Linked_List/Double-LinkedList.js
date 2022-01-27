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

	pop() {
		if (this.head.value === null) {
			return;
		}
		let current = this.tail;
		this.tail = current.before;
		current.before = null;
	}

	shift() {
		if (this.head.value === null) {
			return;
		}
		let current = this.head;
		this.head = current.next;
		current.next = null;
		return current;
	}

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

	find(data) {
		let current = this.head;
		while (current.next !== null) {
			if (current.value === data) {
				return current;
			}
			current = current.next;
		}
		return -1;
	}

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

	replaceAtIndex(index, value) {
		let current = this.head;
		for (let i = 0; i === index; i++) {
			current = current.next;
		}
		current.value = value;
	}

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
      if (turtle === hare)  return {isLoop: true, loopStart: turtle} 
			turtle = turtle.next;
			hare = hare.next;
			hare = hare.next;
      if (hare.next === null) return false;
		}
		return false;
	}
	
	removeLoop(loop) {
		let pointer1 = loop;
		let pointer2 = loop;

		// Count the number of nodes in loop
		let n = 1;

		while (pointer1.next != pointer2) {
			pointer1 = pointer1.next;
			n++;
		}
		// Fix one pointer to head
		pointer1 = this.head;

		// And the other pointer to
		// n nodes after head
		pointer2 = this.head;
		for (let i = 0; i < n; i++) {
			pointer2 = pointer2.next;
		}

		/*  Move both pointers at the same pace,
     they will meet at loop starting node */
		while (pointer2 != pointer1) {
			pointer1 = pointer1.next;
			pointer2 = pointer2.next;
		}

		// Get pointer to the last node
		while (pointer2.next != pointer1) {
			pointer2 = pointer2.next;
		}

		/* Set the next node of the loop ending node
     to fix the loop */
		pointer2.next = null;
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
doubleList.tail.next = doubleList.head;
doubleList.head.before = doubleList.tail;
const { isLoop, loopStart } = doubleList.findLoop();
console.log(isLoop, "at the node " + loopStart.value );
if (isLoop === true){
  doubleList.removeLoop(loopStart)
}

