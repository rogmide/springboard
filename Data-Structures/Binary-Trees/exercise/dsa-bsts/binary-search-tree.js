class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let tree = this;
    if (tree.root === null) {
      tree.root = new Node(val);
      return tree;
    }
    let currNode = tree.root;
    while (currNode) {
      if (currNode.val > val) {
        if (currNode.left === null) {
          currNode.left = new Node(val);
          return tree;
        }
        currNode = currNode.left;
      } else {
        if (currNode.right === null) {
          currNode.right = new Node(val);
          return tree;
        }
        currNode = currNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  // Got Little Stuck on this one bcz had it this way,
  // insertRecursively(currNode = this.root, val)
  // the order of the param matter, lol
  // is like the first one just recursive
  insertRecursively(val, currNode = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < currNode.val) {
      if (currNode.left === null) {
        currNode.left = new Node(val);
        // console.log(this);
        return this;
      }
      return this.insertRecursively(val, currNode.left);
    } else {
      if (currNode.right === null) {
        currNode.right = new Node(val);
        // console.log(this);
        return this;
      }
      return this.insertRecursively(val, currNode.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root;
    while (currNode) {
      if (currNode.val === val) {
        return currNode;
      }
      currNode = currNode.val > val ? currNode.left : currNode.right;
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currNode = this.root) {
    if (!currNode) return undefined;
    if (currNode.val === val) {
      return currNode;
    }

    if (currNode.val > val) {
      return this.findRecursively(val, currNode.left);
    } else {
      return this.findRecursively(val, currNode.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(currNode = this.root, result = []) {
    result.push(currNode.val);
    if (currNode.left) this.dfsPreOrder(currNode.left, result);
    if (currNode.right) this.dfsPreOrder(currNode.right, result);
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(currNode = this.root, result = []) {
    if (currNode.left) this.dfsInOrder(currNode.left, result);
    result.push(currNode.val);
    if (currNode.right) this.dfsInOrder(currNode.right, result);
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(currNode = this.root, result = []) {
    if (currNode.left) this.dfsPostOrder(currNode.left, result);
    if (currNode.right) this.dfsPostOrder(currNode.right, result);
    result.push(currNode.val);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(currNode = this.root, result = [], stack = [currNode]) {
    if (stack.length) {
      currNode = stack.shift();
      result.push(currNode.val);
      if (currNode.left) {
        stack.push(currNode.left);
      }
      if (currNode.right) {
        stack.push(currNode.right);
      }
      return this.bfs(null, result, stack);
    }
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
