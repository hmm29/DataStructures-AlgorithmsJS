/**
 * Created by harrisonmiller on 9/24/14.
 */

/**
 * Queue class
 * instantiate to create a Queue data structure
 * ensures O(1) push (enqueue) & pop (dequeue) operations
 */

class Queue {
	/*
	 * @constructor
	 * @param {Array} contents
	 */
	constructor(contents = []) {
		this.queue = [...contents];
	}

	/*
	 * pop
	 * @return {Element} value
	 */
	pop() {
		const value = this.queue[0];
		this.queue.splice(0,1);
		return value;
	}

	/*
	 * push
	 * @param {Element} value
	 */
	push(value) {
		this.queue.push(value);
	}
}