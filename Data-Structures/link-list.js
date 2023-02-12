class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// const firstPage = new Node(
//   "google.com",
//   new Node("reddit.com", new Node("amazon.com"))
// );

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  traverse() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode);
      currNode = currNode.next;
    }
  }
  find(val) {
    let currNode = this.head;
    while (currNode) {
      if (currNode.val === val) return true;
      currNode = currNode.next;
    }
    return false;
  }

  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

// const history = new LinkList();

const train = new LinkList();
train.append("Engine");
train.append("Freight Car 1");
train.append("Freight Car 2");
train.append("Caboose");
