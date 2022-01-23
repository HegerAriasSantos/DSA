var head;

class Nodo {
	data: any;
	next: any;
	constructor(val) {
		this.data = val;
		this.next = null;
	}
}

// Function that detects loop in the list
function detectAndRemoveLoop(node) {
	let slow = node;
	let fast = node;
	while (slow !== null && fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;

		// If slow and fast meet at same
		// point then loop is present
		if (slow == fast) {
			removeLoop(slow, node);
			return true;
		}
	}
	return false;
}

// Function to remove loop
function removeLoop(loop, head) {
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

// Function to print the linked list
function printList(node) {
	while (node != null) {
		console.log(node.data + " ");
		node = node.next;
	}
}

// Driver code
head = new Nodo(50);
head.next = new Nodo(20);
head.next.next = new Nodo(15);
head.next.next.next = new Nodo(4);
head.next.next.next.next = new Nodo(10);

// Creating a loop for testing
head.next.next.next.next.next = head.next.next;
detectAndRemoveLoop(head);
console.log("Linked List after removing loop : ");
printList(head);

// This code is contributed by todaysgaurav
