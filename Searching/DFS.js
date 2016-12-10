/**
 * Created by harrisonmiller on 9/28/14.
 */

class GraphNode {
    constructor() {
        this.children = [];
        this.value = null;
        this.visited = false;
    }
}


// depth first search
// operates in O(|v| + |e|), or O(n) where n is number of nodes
// O(n) space for the stack (and optional hash table)

// @param tree {Tree} - the tree to be searched
// @param s - the key we're searching for
// @returns {String} "found" or "not found"

function dfs(tree, s) {
    // case 0: there is no tree or root
    if(tree === null || !(tree instanceof GraphNode)) {
        return -1;
    }

    // case 1: there is only one node
    // return if the root key equals s
    if(tree && !tree.children.length) {
        return tree.value === s;
    }

    // case 2: there is a tree
    // create a stack and traverse the tree depth first
    // mark nodes as visited when they have been visited using a hash table
    // or we could mark them as visited in the nodes themselves

    // create a stack
    let stack = [tree], currNode;

    // while the stack is not empty
    while(stack.length) {
        // pop the node
        currNode = stack.pop();

        // if node has been visited, then skip it
        // otherwise mark it as visited
        if(currNode.visited) continue;
        else currNode.visited = true;

        // if node key is target key, return "found"
        if(currNode.value === s) return "found";

        // traverse the tree by pushing children onto stack
        for(let i = 0; i < currNode.children.length; i++) {
            stack.push(currNode.children[i]);
        }
    }

    return "not found";
}





// selection sort
// n(n-1)/2 comparisons => O(n^2) worst case and avg case
// O(n^2) time complexity
// O(1) space complexity


function selectionSort(arr) {
    // case 0: input check
    if(!Array.isArray(arr)) return -1;

    // case 1: empty or just one elt
    if(arr.length <= 1) return arr;

    // case 2: perform selection sort
    // select smallest element in unsorted portion of list
    // and move to front

    // define your variables
    let j, min, idx; 

    for(let i = 0; i < arr.length-1; i++) {
        j = i+1;
        min = arr[i];
        idx = i;

        while(j < arr.length) {
            if(arr[j] < min) {
                min = arr[j];
                idx = j;
            }
            j++; // must increment variable in while loop
        }
        if(arr[i] != arr[idx]) swap(arr, i, idx);
    }

    return arr;
}





// insertion sort
// n(n-1)/2 comparisons => O(n^2) worst case and avg case
// O(n) best case

function insertionSort(arr) {
    // case 0: not an array
    if(!Array.isArray(arr)) return -1;

    // case 1: array is empty or has just one elt
    if(arr.length <= 1) return arr;

    // case 2: rest of instances
    // insertion sort takes element from unsorted part of array
    // and inserts it in correct position in sorted part of the array
    for(let i = 1; i < arr.length; i++) {
        j = i;
        while(arr[j] < arr[j-1]) {
            swap(arr, j, j-1);
            j--;
        }
    }

    return arr; // don't forget to return the sorted array
}

function swap(arr, idx1, idx2) {
    let tmp; // temp variable to hold first swapped element

    tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
}

