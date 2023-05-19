class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    // Return the front element of the queue without removing it
    front() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the queue
    size() {
      return this.items.length;
    }
  
    // Remove all elements from the queue
    clear() {
      this.items = [];
    }
  
    // Print the elements of the queue
    print() {
      console.log(this.items.toString());
    }
  }
  
  // Example usage
  const queue = new Queue(); 
  queue.enqueue(1); 
  queue.enqueue(2); 
  queue.enqueue(3);
  queue.enqueue(4);
  queue.print(); // Output: 1,2,3,4
  
  console.log(queue.dequeue()); // Output: 1 
  console.log(queue.front()); // Output: 2 
  console.log(queue.isEmpty()); // Output: false 
  console.log(queue.size()); // Output: 3 
  
  queue.clear();
  console.log(queue.isEmpty()); // Output: true
  