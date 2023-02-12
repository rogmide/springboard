/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) return undefined;
    let tempNext = this.head.next;
    let currNode = this.head;
    while (tempNext.next != null) {
      currNode = currNode.next;
      tempNext = tempNext.next;
    }
    currNode.next = null;
    this.tail = currNode;
    return tempNext;
  }

  /** shift(): return & remove first item. */

  shift() {}

  /** getAt(idx): get val at idx. */

  getAt(idx) {}

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

const train = new LinkedList();
train.push("Engine");
train.push("Freight Car 1");
train.push("Freight Car 2");
train.push("Caboose");

module.exports = LinkedList;
