import DoublyLinkedList from "../Linked_List/Double-LinkedList";

export default class Stack {
	items: DoublyLinkedList;
	length: number;
	constructor(data: string | number) {
		this.length = 0;
		this.items = new DoublyLinkedList(data);
	}

	/**
	 * While the length of the stack is not zero, push the popped value to the array.
	 * @returns An array of strings and numbers.
	 */
	Clear() {
		let arr: Array<string | number> = [];
		while (this.length !== 0) {
			arr.push(this.Pop());
		}
		return arr;
	}

	/**
	 * The Peek() function returns the value of first item in the stack.
	 * @returns The value of the head node.
	 */
	Peek() {
		return this.items.head.value;
	}

	/**
	 * The function removes the first element from the stack and returns it.
	 * @returns The first element of the list.
	 */
	Pop() {
		this.length--;
		let firstElement = this.items.head.value;
		this.items.shift();
		return firstElement;
	}

	/**
	 * Push() adds a new item to the top of the stack
	 * @param {string | number} data - The data to be added to the stack.
	 */
	Push(data: string | number) {
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

let stack = new Stack(0);
stack.Push(1);
stack.Push(2);
stack.Push(3);
stack.Push(4);
stack.Push(5);

while (stack.length !== 0) {
	console.log(stack.Pop());
}
