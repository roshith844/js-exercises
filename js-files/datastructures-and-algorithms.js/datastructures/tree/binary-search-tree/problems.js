// find closest value to a given number in a binary search tree

let input = 5

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
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return
        }

        let current = this.root
        while (true) {
            if (value === current.value) {
                console.log(" value already exists ")
            }

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

    getClosestValue(value) {
        let closestValue = this.root.value
        let difference = Math.abs(value - this.root.value)

        helper(this.root)
        console.log("The closest value is : ")
        console.log(closestValue)

        function helper(node) {
            if (node === null) return
            helper(node.left)
            let calculatedDifference = Math.abs(value - node.value)
            if (calculatedDifference < difference) {
                difference = calculatedDifference
                closestValue = node.value
            }
            helper(node.right)
        }
    }
}

let bst = new Bst()
bst.insert(10)
bst.insert(8)
bst.insert(15)
bst.insert(12)
bst.insert(18)
bst.insert(20)
bst.getClosestValue(19)

// 2. 
