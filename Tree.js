// set up node for BSTree
// Node contain value + left + right
// if there is duplicate add count
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        // if duplicate add count count: ++
    }
}
class BST {
    constructor(){
        this.root = null;
    }
    // Insert an intem in BST
    // edge cases: if root === null then root = newNode
    // let temp = this.root;
    // while loop 
    insert(value) {
        const newNode = new Node(value);
        // empty tree
        if (this.root === null) {
            this.root = newNode;
        }
        let temp = this.root;
        while(true) {
            // left side
            if (newNode === temp) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            // right side
            } else {
                if(temp. right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
            

        }
    }
    contains(value) {
        if (this.root === null) return false;
        let temp = this.root;
        while(temp) {
            if (value < temp.value) {
                temp = temp.left
            } else if (value > temp.value) {
                temp = temp.right
            } else {
                return true
            }
        }
        return false
    }
    

}

let myTree = new BST();
console.log(myTree.insert(12));
console.log(myTree.insert(15));
console.log(myTree.insert(17));
console.log(myTree.insert(16));
