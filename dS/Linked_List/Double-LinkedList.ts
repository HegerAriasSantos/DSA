import { DoublyLinkedListNode } from "../lib/nodes/linkedListNode";

class DoublyLinkedList {
	head: DoublyLinkedListNode;
	tail: DoublyLinkedListNode;

	constructor(nodeData: string | number) {
		this.head = new DoublyLinkedListNode(nodeData);
		this.tail = this.head;
	}

	/**
	 * If the head is null, then set the head to the data. Otherwise, create a new node, set the next
	 * node to the head, set the head's before to the new node, and set the head to the new node.
	 * @param {string | number} data - string | number
	 * @returns The head of the list.
	 */
	unshift(data: string | number) {
		if (this.head.value === null) {
			this.head.value = data;
			return;
		}
		let nodo = new DoublyLinkedListNode(data);
		nodo.next = this.head;
		this.head.before = nodo;
		this.head = nodo;
	}

	/**
	 * If the head is empty, set the head to the data. Otherwise, create a new node, set the new node's
	 * previous to the tail, set the tail's next to the new node, and set the tail to the new node.
	 * @param {string | number} data - string | number
	 * @returns the value of the node that is being pushed.
	 */
	push(data: string | number) {
		if (this.head.value === null) {
			this.head.value = data;
			return;
		}
		let nodo = new DoublyLinkedListNode(data);
		nodo.before = this.tail;
		this.tail.next = nodo;
		this.tail = nodo;
	}

	/**
	 * The pop() function removes the last node from the list and returns it
	 * @returns The last node in the list.
	 */

	pop(): number | DoublyLinkedListNode {
		let current = this.tail;
		if (current.before !== null) {
			this.tail = current.before;
			current.before = null;
			return current;
		}
		return 0;
	}

	/**
	 * The shift() function removes the first node from the linked list and returns it
	 * @returns The current node is being returned.
	 */
	shift() {
		let current = this.head;
		if (current.next !== null) {
			this.head = current.next;
			current.next = null;
			return current;
		}
		return 0;
	}

	/**
	 * It takes an index and a data value, and inserts a new node with the data value at the index
	 * @param {number} index - number - The index where you want to insert the data.
	 * @param {string | number} data - string | number
	 * @returns The node that was inserted.
	 */
	insertAtIndex(
		index: number,
		data: string | number,
	): string | DoublyLinkedListNode {
		let current = this.head;
		let nodo = new DoublyLinkedListNode(data);
		for (let i = 0; i >= index - 1; i++) {
			if (current.next === null) return "Index out of range";
			current = current.next;
		}
		nodo.next = current.next;
		current.next = nodo;
		current.before = nodo;
		return nodo;
	}

	/**
	 * The function removes the node at the specified index and returns the node that was removed.
	 * @param {number} index - number - The index of the node to be removed.
	 * @returns The node that was removed.
	 */
	removeAtIndex(index: number): string | DoublyLinkedListNode {
		let nodePrev = this.head;
		for (let i = 1; i >= index - 1; i++) {
			if (nodePrev.next === null) return "Index out of range";
			nodePrev = nodePrev.next;
		}
		let nodoToDelete = nodePrev.next ?? null;
		let nodoAfterToDelete = nodoToDelete?.next ?? null;
		if (nodoToDelete === null || nodoAfterToDelete === null) {
			return "Index out of range";
		}

		nodePrev.next = nodoToDelete.next;
		nodoAfterToDelete.before = nodoToDelete.before;
		return nodoToDelete;
	}

	/**
	 * The function takes in a string or number and returns the node that contains the value or -1 if the
	 * value is not found
	 * @param {string | number} data - The data you want to find in the linked list.
	 * @returns The current node.
	 */
	find(data: string | number) {
		let current = this.head;
		while (current.next !== null) {
			if (current.value === data) {
				return current;
			}
			current = current.next;
		}
		return -1;
	}

	/**
	 * It takes a value and a newData as parameters, and if the value is found in the linked list, it
	 * replaces the value with the newData
	 * @param {string | number} value - The value you want to replace.
	 * @param {string | number} newData - The new data you want to replace the old data with.
	 * @returns The boolean value of true or false.
	 */
	replace(value: string | number, newData: string | number): boolean {
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

	/**
	 * It takes an index and a value, and replaces the value at the index with the new value
	 * @param {number} index - number - The index of the node you want to replace
	 * @param {string | number} value - string | number - This is the value that you want to replace the
	 * current value with.
	 * @returns The current node.
	 */
	replaceAtIndex(
		index: number,
		value: string | number,
	): string | DoublyLinkedListNode {
		let current = this.head;
		for (let i = 0; i === index; i++) {
			if (current.next === null) return "Index out of range";
			current = current.next;
		}
		current.value = value;
		return current;
	}

	/**
	 * It takes the first element of the list and swaps it with the last element of the list, then it
	 * takes the second element of the list and swaps it with the second to last element of the list, and
	 * so on until it reaches the middle of the list.
	 * @returns the value of the variable auxiliarVariable.
	 */
	invert(): number {
		let currentTail = this.tail;
		let currentHead = this.head;
		let auxiliarVariable: string | number;
		while (currentHead.next !== null) {
			if (currentTail.before === null) return 0;
			auxiliarVariable = currentHead.value;
			currentHead.value = currentTail.value;
			currentTail.value = auxiliarVariable;

			currentHead = currentHead.next;
			currentTail = currentTail.before;
		}
		this.imprimir();
		return 1;
	}

	/**
	 * If the hare and the turtle are the same, then there is a loop, otherwise there is no loop.
	 */
	findLoop() {
		let turtle = this.head;
		let hare = this.head;
		while (hare.next !== null && turtle.next !== null) {
			turtle = turtle.next;
			for (let i = 0; i < 2; i++) {
				if (hare.next !== null) {
					hare = hare.next;
				} else {
					return { isBucle: false, node: null };
				}
			}
			if (turtle === hare) {
				return { isBucle: true, node: turtle };
			}
		}
		return { isBucle: false, node: null };
	}

	/**
	 * We find the loop in the linked list and then we find the last node in the loop. Then we set the
	 * next node of the last node to null to break the loop
	 * @returns The number of nodes in the loop.
	 */

	removeLoop() {
		const { node } = this.findLoop();
		if (node === null) return 0;

		let pointer1 = node;
		let pointer2 = node;

		// Count the number of nodes in loop
		let k: number = 1;
		let i: number = 0;

		while (pointer1.next != pointer2) {
			if (pointer1.next !== null) {
				pointer1 = pointer1.next;
				k++;
			}
		}

		// Fix one pointer to head
		pointer1 = this.head;

		// And the other pointer to
		// k nodes after head
		pointer2 = this.head;
		for (i = 0; i < k; i++) {
			if (pointer2.next != null) pointer2 = pointer2.next;
		}

		/*  Move both pointers at the same pace,
     they will meet at loop starting node */
		while (pointer2 !== pointer1) {
			if (pointer2.next != null) pointer2 = pointer2.next;
			if (pointer1.next != null) pointer1 = pointer1.next;
		}

		// Get pointer to the last node
		while (pointer2.next != pointer1) {
			if (pointer2.next != null) pointer2 = pointer2.next;
		}

		/* Set the next node of the loop ending node
     to fix the loop */
		pointer2.next = null;
	}

	/**
	 * While the next node is not null, add the value of the current node to the string, then set the
	 * current node to the next node.
	 */
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

	/**
	 * The function takes an array of strings and numbers, and adds each element to the beginning of the
	 * linked list
	 * @param arr - Array<string | number>
	 * @returns The array itself.
	 */
	fromArray(arr: Array<string | number>) {
		arr.forEach(value => this.unshift(value));
		return this;
	}

	/**
	 * We create an empty array, then we create a variable called currentNode and set it equal to the head
	 * of the linked list. Then we create a while loop that runs as long as the currentNode's next
	 * property is not equal to null. Inside the while loop, we push the currentNode into the nodes array,
	 * then we set the currentNode equal to the currentNode's next property. Finally, we return the nodes
	 * array
	 * @returns An array of DoublyLinkedListNode objects.
	 */
	toArray(): DoublyLinkedListNode[] {
		const nodes: DoublyLinkedListNode[] = [];
		let currentNode = this.head;
		while (currentNode.next !== null) {
			nodes.push(currentNode);
			currentNode = currentNode.next;
		}
		return nodes;
	}
}

/* --TEST--
const doubleList = new DoublyLinkedList(0);
doubleList.push(0);
doubleList.push(1);
doubleList.push(2);
doubleList.push(3);
doubleList.push(4);
doubleList.tail.next = doubleList.head;
doubleList.head.before = doubleList.tail;
const { isLoop, loopStart } = doubleList.findLoop();
console.log(isLoop, "at the node " + loopStart.value);
if (isLoop === true) {
  doubleList.removeLoop(loopStart)
}

*/

export default DoublyLinkedList;
