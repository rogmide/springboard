/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(nodeRoot = this.root) {
    if (!nodeRoot) return 0;
    let leftSide = this.minDepth(nodeRoot.left);
    let rightSide = this.minDepth(nodeRoot.right);
    if (nodeRoot.left === null) return 1 + rightSide;
    if (nodeRoot.right === null) return 1 + leftSide;
    return Math.min(leftSide, rightSide) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(nodeRoot = this.root) {
    if (!nodeRoot) return 0;
    let leftSide = this.maxDepth(nodeRoot.left);
    let rightSide = this.maxDepth(nodeRoot.right);
    if (nodeRoot.left === null) return 1 + rightSide;
    if (nodeRoot.right === null) return 1 + leftSide;
    return Math.max(leftSide, rightSide) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let max = 0;
    function finder(nodeRoot) {
      if (!nodeRoot) return 0;
      let sumLeft = finder(nodeRoot.left);
      let sumRight = finder(nodeRoot.right);
      max = Math.max(max, sumLeft + sumRight + nodeRoot.val);
      return Math.max(sumLeft + nodeRoot.val, sumRight + nodeRoot.val);
    }
    finder(this.root);
    return max;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let min = null;
    function findSmaller(nodeRoot) {
      if (nodeRoot) {
        if (nodeRoot.val > lowerBound && (nodeRoot.val < min || min === null)) {
          min = nodeRoot.val;
        }
      }

      if (nodeRoot) findSmaller(nodeRoot.left);
      if (nodeRoot) findSmaller(nodeRoot.right);

      return min;
    }
    return findSmaller(this.root);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
