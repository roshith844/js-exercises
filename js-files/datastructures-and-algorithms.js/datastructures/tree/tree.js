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
        queue.push(child)
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

    searchHelper(this.root)

    if (parent === null) {
      throw new Error(`Parent node with value ${parentValue} not found`);
    }

    parent.addChild(newNode);
  }

  // delete

    deleteNode(value) {
    let parent = null;
    let nodeToDelete = null; 

    // Find the node to delete and its parent
    function searchHelper(node) {
      if (node.value === value) {
        nodeToDelete = node;
      }

      for (const child of node.children) {
        if (child.value === value) {
          parent = node;
          nodeToDelete = child;
          break;
        } else {
          searchHelper(child);
        }
      }
    }

    searchHelper(this.root);

    if (nodeToDelete === null) {
      throw new Error(`Node with value ${value} not found`);
    }

    // If the node has no children, simply remove it from its parent's children list
    if (nodeToDelete.children.length === 0) {
      parent.children = parent.children.filter(child => child !== nodeToDelete);
    }
    // If the node has one child, replace the node with its child
    else if (nodeToDelete.children.length === 1) {
      const child = nodeToDelete.children[0];
      parent.children = parent.children.map(child => child === nodeToDelete ? child.children[0] : child);
    }
    // If the node has two children, find the minimum node in its right subtree,
    // replace the node with this minimum node, and then delete the minimum node from the right subtree
    else {
      let minNode = nodeToDelete.children[0];
      while (minNode.children.length > 0) {
        minNode = minNode.children[0];
      }
      nodeToDelete.value = minNode.value;
      this.deleteNode(minNode.value);
    }
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
