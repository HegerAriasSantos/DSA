import DoublyLinkedList from "../Linked_List/Double-LinkedList";

export default class Stack {
	items: DoublyLinkedList;
	length: number;
	constructor(data: string | number) {
		this.length = 0;
		this.items = new DoublyLinkedList(data);
	}

	Clear() {
		let arr: Array<string | number> = [];
		while (this.length !== 0) {
			arr.push(this.Pop());
		}
		return arr;
	}

	Peek() {
		return this.items.head.value;
	}

	Pop() {
		this.length--;
		let firstElement = this.items.head.value;
		this.items.shift();
		return firstElement;
	}

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
