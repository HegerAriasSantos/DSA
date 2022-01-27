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
		this.imprimir();
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

		this.imprimir();
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
				this.removeLoop(slow, fast);
				return true;
			}
		}
		return false;
	}

	removeLoop(loop, head) {
		let ptr1 = loop;
		let ptr2 = loop;
		// Count the number of nodes in loop
		let k = 1;
		let i;
		while (ptr1.next != ptr2) {
			ptr1 = ptr1.next;
			k++;
		}
		// Fix one pointer to head
		ptr1 = head;

		// And the other pointer to
		// k nodes after head
		ptr2 = head;
		for (i = 0; i < k; i++) {
			ptr2 = ptr2.next;
		}

		/*  Move both pointers at the same pace,
     they will meet at loop starting node */
		while (ptr2 != ptr1) {
			ptr1 = ptr1.next;
			ptr2 = ptr2.next;
		}

		// Get pointer to the last node
		while (ptr2.next != ptr1) {
			ptr2 = ptr2.next;
		}

		/* Set the next node of the loop ending node
     to fix the loop */
		ptr2.next = null;
	}
	imprimir() {
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
		this.tail.next = this.head;
	}
}

const SingleLinkedList2 = new SingleLinkedList(0);
SingleLinkedList2.unshift(1);
SingleLinkedList2.unshift(2);
SingleLinkedList2.unshift(3);
SingleLinkedList2.unshift(4);
SingleLinkedList2.invert();
SingleLinkedList2.imprimir();
SingleLinkedList2.createLoop();
SingleLinkedList2.imprimir();
