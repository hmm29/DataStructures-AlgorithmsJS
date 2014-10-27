/**
 * Created by harrisonmiller on 9/28/14.
 */
function bfs(root, key) {
    var stack = [],
        checkedNode;
    stack.push(root);
    while (stack.length > 0) {
        checkedNode = stack.pop();
        if (checkedNode.key == key) {
            return true;
        }
        else {
            for (var i = 0, child; child = checkedNode.children()[i]; i++){
                stack.push(child);
            }
        }
    }
    return false;
}