class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      // if (value === current.value) {
      //   return undefined;
      // }
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } 
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) {
      return false;
    }

    return current;
  }

  remove(value) {
    function removeNode(node, value) {

      if (node === null) {                                                                                                                                                                                                           
        return null;
      }

      if (value === node.value) {

        // node has no children
        if (node.left === null && node.right === null) {
          return null;
        }

        // node has no left child
        if (node.left === null) {
          return node.right;
        }

        // node has no right child
        if (node.right === null) {
          return node.left;
        }

        // node has two children
        // gets most left value in right subtree and puts in temp node
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    }

    this.root = removeNode(this.root, value);
  }

  printInOrder() {
    helper(this.root)
    function helper(node) {
        if (node == null) return
        helper(node.left)
        console.log(node.value)
        helper(node.right)
    }
}

printPreOrder() {
    helper(this.root)
    function helper(node) {
        if (node == null) return
        console.log(node.value)
        helper(node.left)
        helper(node.right)
    }
}

printPostOrder() {
    helper(this.root)
    function helper(node) {
        if (node == null) return
        helper(node.left)
        helper(node.right)
        console.log(node.value)
    }
}


}

// Example usage:

const bst = new BinarySearchTree();

bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(4);
bst.insert(2);
bst.insert(6)
bst.remove(8)

bst.traverseInOrder()
//    

