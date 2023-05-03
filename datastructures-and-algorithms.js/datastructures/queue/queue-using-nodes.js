class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(data) {
        let newNode = new Node(data);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.front) {
            return "Underflow";
        }

        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.size--;
    }

    frontElement() {
        if (!this.front) {
            return null;
        }
        return this.front.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    printQueue() {
        let current = this.front;
        let str = "";
        while (current) {
            str += current.data + " ";
            current = current.next;
        }
        return str;
    }
}

// example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.printQueue());
