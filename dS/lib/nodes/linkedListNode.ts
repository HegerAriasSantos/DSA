class NodoSimplyLinkedList {
	value: string | number;
	next: NodoSimplyLinkedList | null;
	constructor(value: string | number) {
		this.value = value;
		this.next = null;
	}
	display() {
		return this.value;
	}
}
class DoublyLinkedListNode {
	value: string | number;
	next: DoublyLinkedListNode | null;
	before: DoublyLinkedListNode | null;

	constructor(data: string | number) {
		this.value = data;
		this.next = null;
		this.before = null;
	}
	display() {
		return this.value;
	}
}
export { NodoSimplyLinkedList, DoublyLinkedListNode };
