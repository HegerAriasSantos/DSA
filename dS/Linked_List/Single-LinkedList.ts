import { NodoSimplyLinkedList } from "../lib/nodes/linkedListNode";

class SimplyLinkedList {
	head: NodoSimplyLinkedList;

	constructor(head: NodoSimplyLinkedList) {
		this.head = head;
	}

	/* Adding a node to the beginning of the list. */
	unshift(node: NodoSimplyLinkedList): void {
		node.next = this.head;
		this.head = node;
	}

	/**
	 * While the current node's next property is not null, set the current node to the next node, then set
	 * the current node's next property to the node passed in as an argument.
	 * @param {NodoSimplyLinkedList} node - NodoSimplyLinkedList - The node to be added to the end of the
	 * list.
	 */
	push(node: NodoSimplyLinkedList): void {
		let currentNode = this.head;
		while (currentNode.next !== null) {
			currentNode = currentNode.next;
		}
		currentNode.next = node;
	}

	/**
	 * It takes a value and returns the node that contains that value or a string that says the value was
	 * not found
	 * @param {string | number} value - string | number
	 * @returns The node that contains the value or a string that says the element was not found.
	 */

	search(value: string | number): string | NodoSimplyLinkedList {
		let currentNode = this.head;
		if (currentNode.value === value) return currentNode;
		while (currentNode.next !== null) {
			if (currentNode.next.value === value) return currentNode.next;
			currentNode = currentNode.next;
		}
		return "The element was not found";
	}

	/**
	 * If the value is found, the node is deleted and the next node is assigned to the current node.
	 * @param {string | number} value - string | number
	 * @returns number where 1 is was deleted and 0 is not found.
	 */
	deleteByValue(value: string | number): number {
		let currentNode = this.head;
		while (currentNode.next !== null) {
			if (currentNode.next.value === value) {
				break;
			}
			currentNode = currentNode.next;
		}
		let foundNode: string | NodoSimplyLinkedList;
		if (currentNode.next !== null) {
			foundNode = currentNode.next;
			if (foundNode.next === null && foundNode.value !== value) return 0;
			currentNode.next = foundNode.next;
			foundNode.next = null;
		}
		return 1;
	}

	/**
	 * It removes the last node from the linked list.
	 * @returns The last node in the list.
	 */

	pop(): NodoSimplyLinkedList {
		let currentNode = this.head;
		let previousNode = this.head;
		while (currentNode.next !== null) {
			previousNode = currentNode;
			currentNode = currentNode.next;
		}
		previousNode.next = null;
		return currentNode;
	}

	/**
	 * If the head node has a next node, then the head node is set to the next node, and the current head
	 * node is returned.
	 * @returns The currentNode is being returned.
	 */

	shift(): NodoSimplyLinkedList | number {
		let currentNode = this.head;
		if (currentNode.next === null) return 0;
		this.head = currentNode.next;
		currentNode.next = null;
		return currentNode;
	}

	/**
	 * "If the hare and the turtle meet, then there is a loop, otherwise there is no loop."
	 *
	 * The hare moves twice as fast as the turtle. If there is a loop, then the hare will eventually catch
	 * up to the turtle. If there is no loop, then the hare will eventually reach the end of the list.
	 *
	 * The hare and the turtle start at the same place. The hare moves twice as fast as the turtle. If
	 * there is a loop, then the hare will eventually catch up to the turtle. If there is no loop, then
	 * the hare will eventually reach the end of the list.
	 *
	 * The hare and the turtle start at the same place. The hare moves twice as fast as the turtle. If
	 * there is a loop, then the hare will eventually catch up to the turtle. If there is no loop, then
	 * the hare will eventually
	 */

	findInfinityBucle() {
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
	 * We find the node where the loop starts, then we count the number of nodes in the loop, then we move
	 * one pointer to the head and the other pointer to the kth node, then we move both pointers at the
	 * same pace until they meet at the loop starting node, then we get the pointer to the last node, then
	 * we set the next node of the loop ending node to fix the loop.
	 */

	deleteBucle() {
		const { node } = this.findInfinityBucle();
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

	display() {
		let currentNode = this.head;
		let linkedList = currentNode.value + " -> ";
		while (currentNode.next !== null) {
			linkedList += currentNode.next.value + " -> ";
			currentNode = currentNode.next;
		}
		linkedList += "null";
		console.log(linkedList);
	}
}
export default SimplyLinkedList;

// -
// 0 -> 1 -> 2 -> null
// 2 -> 1 -> 0 -> null

const linkedList = new SimplyLinkedList(new NodoSimplyLinkedList(0));
linkedList.push(new NodoSimplyLinkedList(1));
linkedList.push(new NodoSimplyLinkedList(2));
const node = linkedList.search(2);
console.log(node);
// if (node instanceof NodoSimplyLinkedList) console.log("Found");
// if (linkedList.foundInfinityBucle()) console.log("Hay un bucle");
