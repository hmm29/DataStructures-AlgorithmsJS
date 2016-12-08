/**
 * Created by harrisonmiller on 9/28/14.
 */
 
// breadth first search
// operates in O(|v| + |e|), or O(n) where n is number of nodes
// O(n) space for the stack (and optional hash table)

// @param tree {Tree} - the tree to be searched
// @param s - the key we're searching for
// @returns {String} "found" or "not found"

function bfs(tree, s) {
    // case 0: there is no tree or root
    if(tree === null || !(tree instanceof GraphNode)) {
        return -1;
    }

    // case 1: there is only one node
    // return if the root key equals s
    if(tree && !tree.children.length) {
        return tree === s;
    }

    // case 2: there is a tree
    // create a stack and traverse the tree depth first
    // mark nodes as visited when they have been visited using a hash table
    // or we could mark them as visited in the nodes themselves

    // create a stack
    let queue = [tree], currNode;

    // create a hash map
    let visited = new Map();

    // until the stack is empty
    while(queue.length) {
        // pop the node
        currNode = queue.shift();

        // mark it as visited
        visited.add({currNode: true});

        // if node has been visited, then skip it
        if(visited.get(currNode)) continue;

        // if node is found, return it
        if(currNode === s) return "found";

        // traverse the tree by pushing children onto stack
        for(let i = 0; i < currNode.children.length; i++) {
            queue.push(currNode.children[i]);
        }
    }

    return "not found";
}







