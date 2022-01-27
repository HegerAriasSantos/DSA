class BinaryTreeNode {
	constructor(value) {
		this.value = value;
		this.children = [];
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}
	insert(value, path, whereChild) {
		let node = new BinaryTreeNode(value);
		if (!path) {
			this.root = node;
		} else {
			let actualNode = this.findNodeByXpath(path);
			actualNode[whereChild] = node;
		}
		return node;
	}
	foundChild(actualNode, valueToSearch) {
		if (actualNode.right?.value === valueToSearch) {
			return actualNode.right;
		} else if (actualNode.left?.value === valueToSearch) {
			return actualNode.left;
		}
		//Javascript return undefined
	}
	findNodeByXpath(path) {
		let actualNode = this.root;
		let routes = path.split("/");
		for (let routeIndex = 0; routeIndex < routes.length - 1; routeIndex++) {
			actualNode = this.foundChild(actualNode, routes[routeIndex + 1]);
		}
		if (actualNode.value === routes[routes.length - 1]) {
			return actualNode;
		} else {
			alert("NO LO ENCONTRE XD");
		}
	}
	recorrer(binaryTreeNode = this.root, level = 0) {
		console.log("-".repeat(level), binaryTreeNode.value);

		if (binaryTreeNode.left) {
			this.recorrer(binaryTreeNode.left, level + 1);
		}

		if (binaryTreeNode.right) {
			this.recorrer(binaryTreeNode.right, level + 1);
		}
	}
}

let systemFile = new BinaryTree();
systemFile.insert("informacion");
systemFile.insert("dia", "informacion", "left");
systemFile.insert("noche", "informacion", "right");
systemFile.insert("datos", "informacion/dia", "left");
systemFile.insert("comida.xls", "informacion/dia/datos", "left");
systemFile.insert("mediciones.txt", "informacion/dia/datos", "right");
systemFile.insert("gastos.txt", "informacion/noche", "left");
systemFile.insert("restaurants", "informacion/noche", "right");
systemFile.insert("mcdonalds.txt", "informacion/noche/restaurants", "left");
systemFile.insert("tequeños.txt", "informacion/noche/restaurants", "right");

// find(value)
// specificInsert(valueParent, value)
// printInOrder(node)
// printPreOrder(node)
// printPostOrder(node)
// search(node, data)
// recursiveInsert(data, node)
// recursiveFind(value)
// recursiveFindMinNode()
