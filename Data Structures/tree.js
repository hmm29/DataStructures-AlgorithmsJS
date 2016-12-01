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
		const queue = [this.root], currNode;

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
		const stack = [this.root], currNode;

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
		const queue = [this.root], currNode;

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

	printInOrder() {
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