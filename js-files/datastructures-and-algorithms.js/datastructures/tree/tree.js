class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(node) {
      this.children.push(node);
    }
  }
  
  class Tree {
    constructor(rootValue) {
      this.root = new TreeNode(rootValue);
    }
  
    traverseBFS() {
      const queue = [this.root];
      const values = [];
  
      while (queue.length > 0) {
        const currentNode = queue.shift();
        values.push(currentNode.value);
        for (const child of currentNode.children) {
          queue.push(child);
        }
      }
  
      return values;
    }
  
    traverseDFS() {
      const values = [];
  
      function dfsHelper(node) {
        values.push(node.value);
        for (const child of node.children) {
          dfsHelper(child);
        }
      }
  
      dfsHelper(this.root);
      return values;
    }
  
    contains(value) {
      function searchHelper(node) {
        if (node.value === value) {
          return true;
        }
  
        for (const child of node.children) {
          if (searchHelper(child)) {
            return true;
          }
        }
  
        return false;
      }
  
      return searchHelper(this.root);
    }
  
    addNode(value, parentValue) {
      const newNode = new TreeNode(value);
      let parent = null;
  
      function searchHelper(node) {
        if (node.value === parentValue) {
          parent = node;
        }
  
        for (const child of node.children) {
          searchHelper(child);
        }
      }
  
      searchHelper(this.root);
  
      if (parent === null) {
        throw new Error(`Parent node with value ${parentValue} not found`);
      }
  
      parent.addChild(newNode);
    }
  }
  
  // Example usage:
  
  const tree = new Tree(1);
  tree.addNode(2, 1);
  tree.addNode(3, 1);
  tree.addNode(4, 2);
  tree.addNode(5, 2);
  tree.addNode(6, 3);
  
  console.log(tree.traverseBFS()); // [1, 2, 3, 4, 5, 6]
  console.log(tree.traverseDFS()); // [1, 2, 4, 5, 3, 6]
  console.log(tree.contains(6)); // true
  console.log(tree.contains(7)); // false
  