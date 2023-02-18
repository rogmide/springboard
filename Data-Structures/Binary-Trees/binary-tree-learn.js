class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  find(sought) {
    let currNode = this;
    while (currNode) {
      console.log("VISITING: ", currNode.val);
      if (currNode.val === sought) return currNode;
      currNode = currNode.val > sought ? currNode.left : currNode.right;
    }
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
}

const E = new Node("E");
const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const F = new Node("F");
const G = new Node("G");

E.left = B;
E.right = G;
B.left = A;
B.right = D;
G.left = F;

const tree = new BinarySearchTree(E);
console.log(E.find("D"));
console.log(E.find("B"));
console.log(E.find("A"));
console.log(E.find("P"));
