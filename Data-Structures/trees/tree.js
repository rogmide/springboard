class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  findDFS(val) {
    let toVisitStack = [this];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      console.log("Visiting", current.val);
      if (current.val === val) return current;
      for (let child of current.children) toVisitStack.push(child);
    }
  }

  findBFS(val) {
    let toVisitQueue = [this];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      console.log("Visiting", current.val);
      if (current.val === val) return current;
      for (let child of current.children) toVisitQueue.push(child);
    }
  }
}

let amy = new Node("amy", [
  new Node("bob", [new Node("Roger"), new Node("Clhoe")]),
  new Node("bard"),
  new Node("barry"),
]);

// console.log(amy);
// console.log(amy.findDFS("Clhoe"));
// console.log(amy.findBFS("Clhoe"));

class Tree {
  constructor(root) {
    this.root = root;
  }

  findInTreeDFS(val) {
    return this.root.findDFS(val);
  }
  findInTreeBFS(val) {
    return this.root.findBFS(val);
  }
}

const myTree = new Tree(amy);

console.log(myTree);
console.log(myTree.findInTreeDFS("Chloe"));
