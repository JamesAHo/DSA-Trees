// set up node for BSTree
// Node contain value + left + right
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor(){
        this.root = null;
    }
}

let myTree = new BST();
console.log(myTree);