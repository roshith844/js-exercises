// construction of node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    // if empty make it head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //   insertLast(data) {
  //     let newNode = new Node(data)
  //     if (!this.head) {
  //         this.head = newNode
  //         this.size++
  //         return
  //     }
  //     let current = this.head
  //     let lastNode = this.head
  //     while (current) {
  //         lastNode = current
  //         current = current.next
  //     }
  //     lastNode.next = newNode
  //     this.size++
  // }

  // Insert at index
  insertAt(data, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;                                        // data next

                                                           // data next

                                                           // data next 
    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after Index
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    // remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next - current.next;
    }
    previous.next = current.next;
  }
  remove(data){
    let current = this.head
    let previous 
    while(current.data !== data){      
        previous = current
        current = current.next
    }
    previous.next = current.next
}
  // Clear List
  clearList() {
    this.head = null;
    this.size = 0;
  }
  // Print list
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(400);
ll.insertLast(1000);
ll.insertAt(500, 2);
ll.removeAt(1);
ll.clearList();
ll.printListData();

function arrayToLinkedList(arr) {
  const ll = new LinkedList();
  for (let i = 0; i < arr.length; i++) {
    ll.insertLast(arr[i]);
  }
  return ll
}

