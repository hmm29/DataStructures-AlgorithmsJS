/**
 * Created by harrisonmiller on 10/25/14.
 */

var myQueue = [];
myQueue.push(1);
myQueue.shift();


//implement queue with double linked list too O(1) for insertion and deletion

function Queue() {

}

Queue.prototype.enqueue = function() {
    var node = {
        data: null,
        next: null
        prev: null
    }
};