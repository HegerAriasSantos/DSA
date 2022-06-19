import DoubleLinkedList from "../Linked_List/Double-LinkedList";

export default class Queue {
	length: number;
	items: DoubleLinkedList;

	constructor(data: string | number) {
		this.length = 0;
		this.items = new DoubleLinkedList(data);
	}

	/**
	 * The function takes in a parameter of type string or number and adds it to the beginning of the
	 * Queue
	 * @param {string | number} data - The data to be added to the queue.
	 */
	enqueue(data: string | number) {
		this.items.unshift(data);
		this.length++;
	}

	/**
	 * The dequeue() function removes the last element from the queue and returns it
	 * @returns The last element in the queue.
	 */
	dequeue() {
		let lastElement = this.items.tail.value;
		this.items.pop();
		this.length--;
		return lastElement;
	}

	/**
	 * The peek() function returns the value of the last item in the queue
	 * @returns The value of the tail of the items Queue.
	 */
	peek() {
		return this.items.tail.value;
	}

	/**
	 * It returns the length of the Queue.
	 * @returns The length of the Queue.
	 */
	size() {
		return this.length;
	}
}

/* fifo (First in First out)

        -------------
        4  3  2  1  0                
        -------------
      	

*/

let Queue2 = new Queue(0);

Queue2.enqueue(1);
Queue2.enqueue(2);
Queue2.enqueue(3);
Queue2.enqueue(4);
Queue2.enqueue(5);

while (Queue2.length !== 0) {
	console.log(Queue2.dequeue());
}
