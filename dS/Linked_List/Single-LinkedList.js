// Array
// const array: Array<any> = [];
// String
// const string: string =
// 	"Como decirle que te amo si me ha preguntado; yo le dije que no.";
// // Boolean
// const isTrue: boolean = true;
// // Integer
// const twenty: number = 10;

// Singly Linked List

class Nodo {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class ListaEnlazada {
	constructor() {
		this.head = new Nodo(null);
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
			if (current.data === data) {
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
			if (current.data === value) {
				current.data = data;
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
		current.data = value;
	}

	// OPCIONAL!!
	invert() {
		//   Invierte el orden de los elementos en la lista
	}

	findLoop() {}

	imprimir() {
		let str = "";
		let nodoActual = this.head;

		while (nodoActual.next != null) {
			str += `${nodoActual.data} => `;
			nodoActual = nodoActual.next;
		}

		str += `${nodoActual.data}`;

		console.log(str);
	}
}

const listaEnlazada = new ListaEnlazada();
listaEnlazada.unshift(0);
listaEnlazada.unshift(1);
listaEnlazada.unshift(2);
listaEnlazada.unshift(3);
listaEnlazada.unshift(4);
listaEnlazada.imprimir();
