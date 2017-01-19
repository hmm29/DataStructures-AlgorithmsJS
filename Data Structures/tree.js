class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	add(value, targetNode) {
		const newNode = new Node(value), res;

		if(this.root === targetNode) {
			this.root.children.push(newNode);
		}

		res = this.findBFS(targetNode);

		if(res !== null) {
			res.children.push(newNode);
		} else {
			console.log("TargetNode not found.");
		}
	}

	remove(node) {
		const res = this.findNodeParent(node);

		if(res) {
			res.children.splice(res.children.indexOf(node), 1); 
		} else {
			console.log("Node not found in tree.");
		}
	}

	contains(node) {
		return !!this.findBFS(node);
	}

	findBFS(node) {
		const queue = [this.root];
		let currNode;

		while(queue.length) {
			currNode = queue.shift();

			if(currNode === node) {
				return currNode;
			}

			for(let i = 0; i < currNode.children.length; i++) {
				queue.push(currNode.children[i]);
			}
		}

		return null;
	}

	findDFS(node) {
		const stack = [this.root];
		let currNode;

		while(stack.length) {
			currNode = stack.pop();

			if(currNode === node) {
				return currNode;
			}

			for(let i = 0; i < currNode.children.length; i++) {
				stack.push(currNode.children[i]);
			}
		}

		return null;
	}

	findNodeParent(node) {
		const queue = [this.root];
		let currNode;

		while(queue.length) {
			currNode = queue.shift();

			if(currNode.children.indexOf(node) >= 0) {
				return currNode;
			}

			for(let i = 0; i < currNode.children.length; i++) {
				queue.push(currNode.children[i]);
			}
		}

		return null;
	}

	printBreadthFirst() {
		const queue, currNode;

		if(this.root === null) {
			console.log("Tree is empty.")
		}

		queue = [this.root];

		while(queue.length) {
			currNode = queue.shift();
			console.log(currNode.data);

			for(let i = 0; i < currNode.children.length; i++) {
				queue.push(currNode.children[i]);
			}
		}
	}
}



/*
 * Test: print values in BST using DFS
 * Observation: this DFS implementation goes from right to left
 */

class BinarySearchTreeNode {
  	constructor(value){
  		this.value = value;
  		this.children = [];
  	}
}

let a = new BinarySearchTreeNode(1);
let b = new BinarySearchTreeNode(2);
let c = new BinarySearchTreeNode(3);

b.children[0] = a;
b.children[1] = c;

function printDFS(root) {

	if(!(root instanceof BinarySearchTreeNode)) return -1;

	const stack = [root]; 
	let currNode;

	while(stack.length) {
		currNode = stack.pop();

		console.log(currNode.value);

		for(let i = 0; i < currNode.children.length; i++) {
			stack.push(currNode.children[i]);
		}
	}
}

printDFS(b);

// 2
// 3
// 1

