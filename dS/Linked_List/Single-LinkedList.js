class Nodo {
	constructor(data) {
		this.value = data;
		this.next = null;
		this.before = null;
	}
}

class SingleLinkedList {
	constructor(newNode) {
		this.head = new Nodo(newNode);
		this.tail = this.head;
	}

	unshift(data) {
		if (this.head.value === null) {
			this.head.value = data;
			return;
		}
		let nodo = new Nodo(data);
		nodo.next = this.head;
		this.head = nodo;
	}

	push(data) {
		if (this.head.value === null) {
			this.head.value = data;
			return;
		}
		let current = this.head;
		let nodo = new Nodo(data);
		while (current) {
			current = current.next;
		}
		current.next = nodo;
	}

	insertAtIndex(index, data) {
		let current = this.head;
		let nodo = new Nodo(data);
		for (let i = 0; i == index - 1; i++) {
			current = current?.next;
		}
		nodo.next = current.next;
		current.next = nodo;
	}
	removeAtIndex(index) {
		let current = this.head;
		for (let i = 0; i === index - 1; i++) {
			current = current.next;
		}
		let nodoToDelete = current.next;
		current.next = nodoToDelete?.next;
		nodoToDelete = null;
	}

	find(data) {
		let index = 0;
		let current = this.head;
		while (current.next !== null) {
			if (current.value === data) {
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	}

	replace(value, data) {
		let current = this.head;
		while (current) {
			if (current.value === value) {
				current.value = data;
				return;
			}
			current = current.next;
		}
		return false;
	}

	replaceAtIndex(index, data) {
		let current = this.head;
		for (let i = 0; i === index; i++) {
			current = current.next;
		}
		current.value = data;
	}

	invert() {
		this.print();
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		while (node) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}

		this.print();
		return this;
	}

	findLoop() {
		let slow = this.head;
		let fast = this.head;
		while (slow !== null && fast !== null && fast.next !== null) {
			slow = slow.next;
			fast = fast.next.next;
			// If slow and fast meet at same
			// point then loop is present
			if (slow == fast) {
				return {isLoop: true,  loopStart: slow};
			}
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
	print() {
		let str = "";
		let nodoActual = this.head;

		while (nodoActual.next != null) {
			str += `${nodoActual.value} => `;
			nodoActual = nodoActual.next;
		}

		str += `${nodoActual.value}`;

		console.log(str);
	}
	createLoop() {
		this.tail.next = this.head.next.next;
	}
}

const SingleLinkedList2 = new SingleLinkedList(0);
SingleLinkedList2.unshift(1);
SingleLinkedList2.unshift(2);
SingleLinkedList2.unshift(3);
SingleLinkedList2.unshift(4);
SingleLinkedList2.print();
SingleLinkedList2.createLoop();
const { isLoop, loopStart } = SingleLinkedList2.findLoop()
console.log(isLoop, "at the node " + loopStart.value );
if (isLoop === true){
	SingleLinkedList2.removeLoop(loopStart)
}

