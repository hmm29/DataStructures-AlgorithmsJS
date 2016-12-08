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

