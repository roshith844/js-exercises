class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    // Return the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the stack
    size() {
      return this.items.length;
    }
  
    // Remove all elements from the stack
    clear() {
      this.items = [];
    }
  
    // Print the elements of the stack
    print() {
      console.log(this.items.toString());
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.print(); // Output: 1,2,3,4
  
  console.log(stack.pop()); // Output: 4
  console.log(stack.peek()); // Output: 3
  console.log(stack.isEmpty()); // Output: false
  console.log(stack.size()); // Output: 3
  
  stack.clear();
  console.log(stack.isEmpty()); // Output: true
  
