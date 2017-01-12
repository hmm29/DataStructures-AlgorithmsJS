class TempTracker {
	constructor() {

		// max temperature
		this.maxTemp = 0;

		// min temperature
		this.minTemp = 0;

		// sum of temperatures
		this.tempSum = 0;

		// length of temperature stack
		this.tempStackLength = 0;

		// counter array for counting temperatures
		this.tempCounter = [];

		// max number of times a temperature occurs
		this.maxTimes = 0;

		// mode goes here
		this.mode = 0;

		// initialize all elements in counter array to 0
		for(let i = 0; i < 111; i++) {
			this.tempCounter[i] = 0;
		}
	}

	insert(temp) {
		// edge case
		if(!(typeof(temp) === "number") || temp < 0 || temp > 110) {
			return -1;
		}

		// check if new temp is greater than max temp
		if(temp > this.maxTemp || !this.tempStackLength) {
			// set maxTemp to newTemp
			this.maxTemp = temp;
		}

		// check if new temp is less than min temp
		if(temp < this.minTemp || !this.tempStackLength) {
			// set minTemp to newTemp
			this.minTemp = temp;
		}

		// add temp to running sum of temperatures in stack
		this.tempSum += temp;

		// increment the stack length by 1
		this.tempStackLength++;

		// increment the count for that temperature in the counter array
		this.tempCounter[temp]++;

		// check if it is the most frequent temperature
		if(this.tempCounter[temp] > this.maxTimes) {

			// update maxTimes
			this.maxTimes = this.tempCounter[temp];

			// change mode to temp
			this.mode = temp;
		}
	}

	getMax() {
		return this.maxTemp;
	}

	getMin() {
		return this.minTemp;
	}

	getMean() {
		return this.tempSum / this.tempStackLength;
	}

	getMode() {
		return this.mode;
	}
}

// O(1) time, and // O(1) space


// Insertion sort
// O(n^2 space complexity), O(1) space

// works for all instances

// 
function insertionsort(arr) {
	// case 0: incorrect input
	if(!Array.isArray(arr)) return -1;

	// case 1: instance with zero or one elements 
	if(arr.length <= 1) return arr;

	// case 2: instances with more than one
	// insertion sort builds a sorted list from left to right

	let tmp;

	// loop 1: iterate through the list starting at index 1
	for(let i = 1; i < arr.length; i++) {

		// loop 2: move the element to its right place in the sorted list
		for(let j = i; arr[j-1] > arr[j]; j--) {
			tmp = arr[j];
			arr[j] = arr[j-1];
			arr[j-1] = tmp;
		}
	}

	return arr;
}


// recursively reverse a singly linked list
// time complexity O(n), space complexity O(n)

// parameter - head, head of the linked list

// instances to account for: empty list, one element list

function reverseSLL(head, prev=null) {
	if(head === null) return prev;

	let tmp = head.next;
	head.next = prev;

	reverseSLL(tmp, head);
}






