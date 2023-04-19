class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const node = new Node(value);
  
      if (!this.root) {
        this.root = node;
        return;
      }
  
      let current = this.root;
  
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        }
      }
    }
  
    search(value) {
      let current = this.root;
  
      while (current) {
        if (value === current.value) {
          return true;
        } else if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
  
      return false;
    }
  }
  
  // Example usage:
  const tree = new BinaryTree();
  tree.insert(5);
  tree.insert(3);
  tree.insert(7);
  tree.insert(1);
  tree.insert(9);
  
  console.log(tree.search(7)); // true
  console.log(tree.search(8)); // false
  