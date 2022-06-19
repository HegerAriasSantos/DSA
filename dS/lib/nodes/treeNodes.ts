export class BinarySearchTreeNode {
	data: string | number;
	left: BinarySearchTreeNode | null;
	right: BinarySearchTreeNode | null;
	constructor(data: string | number) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}
