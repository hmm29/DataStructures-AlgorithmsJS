/**
 * Created by harrisonmiller on 8/20/14.
 */
'use strict';

function reverseSLL(head, prev=null) {
    if(head === null) return prev;

    let tmp = head.next;
    head.next = prev;

    reverseSLL(tmp, head);
}

function LinkedList(data) {
    this.data = data;
    this.next = null;
}

let l = new LinkedList(3);
let p = new LinkedList(2);
let q = new LinkedList(1);

l.next = p;
p.next = q; 

reverseSLL(l, null);

LinkedList.prototype.add = function(value) {
    var node = {
        value: value,
        next: null
    };
    var current;

    if (this.head === null) {
        this.head = node;
    }
    else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    return node;
};

LinkedList.prototype.remove = function(node) {
    var current, value = node.value;

    if (this.head !== null) {
        if (this.head === node) {
            this.head = this.head.next;
            node.next = null;
            return value;
        }
        current = this.head;
        while (current.next) {
            if (current.next === node) {
                current.next = node.next;
                return value;
            }
            current = current.next;
        }
    }
};





// implement queue ADT using two stacks
// amortized O(1) time cost for enqueue and dequeue operations

class QueueUsingStacks {
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    /* enqueue: add an element to the queue
     * @param: element - the element to be added
     * @complexity: O(1)
     */
     enqueue(element) {
        this.stackA.push(element);
     }

    /* dequeue: remove an element from the queue
     * @returns element - the element at the front of the queue
     * @complexity: O(1) amortized
     */
     dequeue() {

        if(this.stackA.isEmpty() && this.stackB.isEmpty()) {
            return "no elements to dequeue";
        }

        else if(!this.stackA.isEmpty() && this.stackB.isEmpty()) {
            while(!this.stackA.isEmpty()) {
                this.stackB.push(this.stackA.pop());
            }
        }

        this.stackB.pop();
     }
}


function addLLNumbers(num1, num2) {

    // if either num1 or num2 is null
    // return -1
    if(num1 === null || num2 === null) {
        return -1;
    }

    let carryOne = false;           // boolean that tells us when to add 1
    let digit1 = num1;              // first number digit pointer
    let digit2 = num2;              // second number digit pointer
    let sum = 0;                    // sum for corresponding digits
    let output = null;              // pointer for inserting into output list in O(1) time
    let lastOutputDigit = null;     // pointer to end node in the output list
    let newNode = null;             // newNode for adding nodes to output sum

    // keep going while there are still digits to add
    while(digit1 !== null && digit2 !== null) {

        // sum of the digits
        sum = digit1.data + digit2.data;

        // if carryOne from previous calculation is true, add 1 to sum
        if(carryOne) {
            sum += 1;
        }

        // determine if 1 needs to be carried to next calculation
        if(sum >= 10 && !carryOne) {
            carryOne = true;
        } else if (sum < 10 && carryOne){
        // set carryOne to false if its true
            carryOne = false;
        }

        // if there is no output list yet, create one
        if(output === null) {
            output = new Node(sum % 10);
            lastOutputDigit = output;
        } else {
            newNode = new Node(sum % 10);
            lastOutputDigit.next = newNode;
            lastOutputDigit = newNode;
        }

        // increment the pointers
        digit1 = digit1.next;
        digit2 = digit2.next;
    }

    // if carryOne is still true after list iteration, append a one
    if(carryOne) {
        newNode = new Node(1);
        lastOutputDigit.next = newNode;
        lastOutputDigit = newNode;
    }

    //return the output list
    return output;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if(!Array.isArray(nums)) {
        throw new Error('Invalid input: nums should be an array');          // input check
    }
    
    let n = nums.length,                                                    // nums length is same as val of highest num
        sum = (n*(n+1))/2;                                                  // calculate sum of first n numbers in O(1) time 
        
    for(let i = 0; i < n; i++) {
        sum -= nums[i];                                                     // iterate, subtracting each number from sum
    }
    
    if(sum === 0) return "No missing numbers";                              // if sum is 0, no missing numbers
    return sum;                                                             // return missing number
};
