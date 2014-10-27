/**
 * Created by harrisonmiller on 9/28/14.
 */
function bfs(root, key) {
    var queue = [],
        checkedNode;
    queue.push(root);
    while (queue.length > 0) {
        checkedNode = queue.shift();
        if (checkedNode.key == key) {
            return true;
        }
        else {
            for (var i = 0, child; child = checkedNode.children()[i]; i++){
                queue.push(child);
            }
        }
    }
    return false;
}