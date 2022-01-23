export default class Nodo {
	value;
	next;
	before;
	constructor(data: any) {
		this.value = data;
		this.next = null;
		this.before = null;
	}
}
