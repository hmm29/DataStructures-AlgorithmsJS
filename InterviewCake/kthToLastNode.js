function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// O(n) time complexity
// O(1) space complexity
// Alternatively can do two passes along linked list
// Can do two walks along the linked list simultaneously or in separate runs

function kthToLastNode(k, head) {
    // make sure k >= 1
    if(k < 1) {
        return "k should have value 1 or greater";
    }

    // make sure head is of proper type
    if(!(head instanceof LinkedListNode)) {
        return "head should be of type LinkedListNode";
    }
    
    // set up runners
    let front, back;
    front = back = head;
    
    // separate front and back by k-1
    // for example, to find second to last node,
    // front pointer should be adjacent to back pointer
    for(let i = 0; i < k-1; i++) {
        if(back.next) {
     		back = back.next;
        } else {
           return "k is greater than length of list";
        }
    }
    
    // iterate down the list with both pointers
    while(back.next) {
     	front = front.next;
        back = back.next;
    }
    
    // return front
    return front;
}

// run your function through some test cases here
console.log(kthToLastNode(2, null));        // returns "head should be of type LinkedListNode"
console.log(kthToLastNode(-45, a));         // returns "k should have value of 1 or greater"
console.log(kthToLastNode(4, a));           // returns "Bundt"
console.log(kthToLastNode(21, a));          // returns "k is greater than length of list"
console.log((kthToLastNode(1, a)).value);   // returns "Eccles";

