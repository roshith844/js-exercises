class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }

    push(data) {
        let newNode = new Node(data)
        newNode.next = this.top
        this.top = newNode
        this.size++
    }

    pop() {
        if (!this.top) {
            return "Underflow"
        }
        let poppedNode = this.top
        this.top = this.top.next
        this.size--
        return poppedNode.data
    }

    peek() {
        if (!this.top) {
            return null
        }
        return this.top.data
    }

    isEmpty() {
        return this.size === 0
    }

    printStack() {
        let current = this.top
        let str = ""
        while (current) {
            str += current.data + " "
            current = current.next
        }
        return str
    }
}

// example usage
const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.printStack()) // 30 20 10
console.log(stack.pop()) // 30
console.log(stack.printStack()) // 20 10
console.log(stack.peek()) // 20
console.log(stack.isEmpty()) // false
