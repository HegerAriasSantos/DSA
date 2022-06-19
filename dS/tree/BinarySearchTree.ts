import { BinarySearchTreeNode } from "../lib/nodes/treeNodes";

class BinarySearchTree {
	root: BinarySearchTreeNode;
	constructor(data: string | number) {
		this.root = new BinarySearchTreeNode(data);
	}
	/**
	 * It inserts a new node into the binary search tree.
	 * @param {string | number} data - string | number
	 */
	insert(data: string | number) {
		let newNode = new BinarySearchTreeNode(data);
		this.insertNode(this.root, newNode);
	}
	/**
	 * If the new node's data is less than the current node's data, then insert the new node into the left
	 * subtree, otherwise insert it into the right subtree
	 * @param {BinarySearchTreeNode} node - The node to insert the new node into.
	 * @param {BinarySearchTreeNode} newNode - The node to be inserted into the tree.
	 */
	insertNode(node: BinarySearchTreeNode, newNode: BinarySearchTreeNode) {
		if (newNode.data < node.data) {
			if (node.left === null) node.left = newNode;
			else this.insertNode(node.left, newNode);
		} else {
			if (node.right === null) node.right = newNode;
			else this.insertNode(node.right, newNode);
		}
	}

	/**
	 * If the node is not null, print the left node, then print the current node, then print the right
	 * node
	 * @param {BinarySearchTreeNode} node - BinarySearchTreeNode - The node to start printing from.
	 */
	printInOrder(node: BinarySearchTreeNode) {
		if (node !== null) {
			if (node.left !== null) this.printInOrder(node.left);
			console.log(node.data);
			if (node.right !== null) this.printInOrder(node.right);
		}
	}

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

const tree = new BinarySearchTree(0);
tree.insert(2);
tree.insert(5);
tree.insert(7);
tree.insert(10);
tree.insert(15);
tree.insert(13);
tree.insert(18);
tree.printInOrder(tree.root);
