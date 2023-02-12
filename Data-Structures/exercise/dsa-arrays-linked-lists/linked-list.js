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

    for (let val of vals) {
      this.push(val);
      // this.length += 1;
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 0;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) throw new Error("Error list is empty");
    let tempNext = this.head.next;
    let currNode = this.head;
    if (!currNode.next) {
      this.tail = null;
      this.head = null;
      this.length -= 1;
      return currNode.val;
    }
    while (tempNext.next != null) {
      currNode = currNode.next;
      tempNext = tempNext.next;
    }
    currNode.next = null;
    this.tail = currNode;
    this.length -= 1;
    return tempNext.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw new Error("Error list is empty");

    let temp = this.head;
    if (!temp.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp.val;
    }
    this.head = temp.next;
    this.length -= 1;
    return temp.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let searchIdx = 0;
    let currNode = this.head;
    while (currNode != null) {
      if (idx === searchIdx) return currNode.val;
      currNode = currNode.next;
      searchIdx += 1;
    }
    throw new Error("Index is invalid");
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currNode = this.getNode(idx);
    currNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (!this.head) {
      this.push(val);
      return;
    }

    let currNode = this.getNode(idx - 1);
    let newNode = new Node(val);

    if (!currNode.next) {
      this.tail = newNode;
    }
    newNode.next = currNode.next;
    currNode.next = newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      return this.shift();
    }

    let isTail = this.getAt(idx);
    if (isTail.tail) {
      return this.pop();
    }

    let currNode = this.getAt(idx - 1);
    if (!currNode.next) {
      this.head = null;
      return currNode;
    }
    let result = currNode.next;
    currNode.next = currNode.next.next;
    return result;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) return 0;
    let total = 0;
    let countItems = 0;
    let currNode = this.head;

    while (currNode) {
      total += currNode.val;
      if (currNode.next != null) {
        currNode = currNode.next;
        countItems += 1;
      } else {
        return total / (countItems + 1);
      }
    }
  }

  // To help me to see the change in the list easy

  traverse() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode);
      currNode = currNode.next;
    }
  }

  getNode(idx) {
    let searchIdx = 0;
    let currNode = this.head;
    while (currNode != null) {
      if (idx === searchIdx) return currNode;
      currNode = currNode.next;
      searchIdx += 1;
    }
    throw new Error("Index is invalid");
  }
}

module.exports = LinkedList;
