class BinarySearchTreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		let newNode = new BinarySearchTreeNode(data);
		if (this.root === null) this.root = newNode;
		else this.insertNode(this.root, newNode);
	}
	insertNode(node, newNode) {
		if (newNode.data < node.data) {
			if (node.left === null) node.left = newNode;
			else this.insertNode(node.left, newNode);
		} else {
			if (node.right === null) node.right = newNode;
			else this.insertNode(node.right, newNode);
		}
	}

	/*  Binary Tree
                       
				10            // root
			/     \
		5         15      // branchs  (children and/or parent)
  /   \      /   \
2      7    13    18  // leaves
*/
	// 2 5 7 10 15 13 18
	// find(value)

	/*
	|pio|
	|pio|
	|pio|
	*/

	printInOrder(node) {
		if (node !== null) {
			this.printInOrder(node.left);
			console.log(node.data);
			this.printInOrder(node.right);
		}
	}
	/*  Binary Tree               
                       
				10            // root
			/     \
		5         15      // branchs  (children and/or parent)
  /   \      /   \
2      7    13    18  // leaves
*/
	// 2 5 7 10 13 15 18

	// printPreOrder(node)
	// printPostOrder(node)
	// remove(data)
	// findMinNode()
	// getRootNode()
	// search(node, data)
	// recursiveFindMinNode()
	// recursiveFind(value)
	// recursiveInsert(data, node)
	// specificInsert(valueParent, value)
}

/*  Binary Tree
                       
				10            // root
			/     \
		5         15      // branchs  (children and/or parent)
  /   \      /   \
2      7    13    18  // leaves
*/

// 2 5 7 10 15 13 18

const tree = new BinarySearchTree();
tree.insert(2);
tree.insert(5);
tree.insert(7);
tree.insert(10);
tree.insert(15);
tree.insert(13);
tree.insert(18);
tree.printInOrder(tree.root);
