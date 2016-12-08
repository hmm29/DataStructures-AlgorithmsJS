class Stack {
 	constructor() {
 		this.stack = [];
 	}

 	push(x) {
 		return this.stack.push(x);
 	}

 	pop() {
 		return this.stack.pop();
 	}

 	peek() {
 		return this.stack[this.stack.length-1];
 	}

 	length() {
 		return this.stack.length;
 	}

 	print() {
 		console.log(this.stack.toString());
 	}
 }

