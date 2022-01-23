import Nodo from "./Node";

export default class ListaEnlazada {
	head;
	tail;
	constructor() {
		this.head = new Nodo(null);
		this.tail = this.head;
	}

	// Agregar elemento al principio de la lista
	unshift(data) {
		if (this.head.value === null) {
			this.head.value = data;
			return;
		}
		let nodo = new Nodo(data);
		nodo.next = this.head;
		this.head = nodo;
	}

	// Agregar un elemento al final de la lista
	push(data) {
		if (this.head.value === null) {
			this.head.value = data;
			return;
		}
		let current = this.head;
		let nodo = new Nodo(data);
		while (current.next !== null) {
			current = current.next;
		}
		current.next = nodo;
	}

	insertAtIndex(index, data) {
		let current = this.head;
		let nodo = new Nodo(data);
		for (let i = 0; i == index - 1; i++) {
			current = current.next;
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
		current.next = nodoToDelete.next;
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
		while (current.next !== null) {
			if (current.value === value) {
				current.value = data;
				return;
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

	// OPCIONAL!!

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

	findLoop() {}

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
}

const listaEnlazada = new ListaEnlazada();
listaEnlazada.unshift(0);
listaEnlazada.unshift(1);
listaEnlazada.unshift(2);
listaEnlazada.unshift(3);
listaEnlazada.unshift(4);
listaEnlazada.invert();
