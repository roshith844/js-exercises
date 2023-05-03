// Question :
// Validate weather a given tree is binary search tree or not

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Bst {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return
        }

        let current = this.root

        while (true) {
            if (current === null) return

            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return
                }
                current = current.left

            } else {
                if (current.right === null) {
                    current.right = newNode
                    return
                }
                current = current.right
            }
        }
    }

    print() {
        helper(this.root)
        function helper(node) {
            if (node === null) return
            helper(node.left)
            console.log(node.value)
            helper(node.right)
        }
    }

    isBST() {
        function helper(node, minVal = -Infinity, maxVal = Infinity) {
            if (!node) {
                return true;
            }
            if (node.val <= minVal || node.val >= maxVal) {
                return false;
            }
            if (!helper(node.left, minVal, node.val) || !helper(node.right, node.val, maxVal)) {
                return false;
            }
            return true;
        }
        return helper(this.root);
    }
}

let bst = new Bst()
bst.insert(100)
bst.insert(50)
bst.insert(150)
bst.insert(130)
bst.insert(160)
bst.isBST()