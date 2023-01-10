class Node {
  constructor(data, head, next) {
    this.data = data;
    this.head = head || null;
    this.next = next || null;
  }
}

class linkedList {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }
  append = (data) => {
    // add to end of list
    const newNode = new Node(data);
    if (!this.tail) {
      this.tail = this.head = newNode;
      this.size++;
    } else {
      const oldTail = this.tail;
      this.tail = newNode;
      oldTail.next = this.tail;
      this.tail.next = oldTail;
      this.size++;
    }
  };
  prepend = (data) => {
    // add to beginning of list
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      this.size++;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      oldHead.next = this.head;
      this.head.next = oldHead;
      this.size++;
    }
  };
  deleteHead = () => {
    if (!this.head) return null;
    let removeHead = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      this.size--;
    } else {
      this.head = this.head.next;
      this.head.next = null;
      this.size--;
    }
    return removeHead.data;
  };
  deleteTail = () => {
    if (!this.tail) return null;
    let removeTail = this.tail;
    if (this.tail === this.head) {
      this.tail = this.head = null;
      this.size--;
    } else {
      this.tail = this.tail.next;
      this.tail.next = null;
      this.size--;
    }
    return removeTail.data;
  };
  search = (data) => {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  };

  traversing = (index) => {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      counter++;
    }
    console.log(currentNode);
    return currentNode[counter];
  };

  insert = (index, data) => {
    const newNode = new Node(data);
    if (!this.head) {
      this.tail = this.head = newNode;
      this.size++;
    } else {
      const leaderNode = this.traversing(index);
      // console.log({leaderNode});
      // const nextNode = leaderNode.next;

      // leaderNode.next = newNode;
      // newNode.next = nextNode;
      // newNode.next = leaderNode;
      // this.size++;
    }
  };

  // delete = (index) => {
  //     if (!this.head) return null;

  //     const leaderNode = this.traversing(index - 1);
  //     const targetDeleteNode = leaderNode.next;
  //     const futureNode = targetDeleteNode.next;

  //     leaderNode.next = futureNode;
  //     futureNode.prev = leaderNode;
  //     this.size--;
  // };
}

const ll = new linkedList();
ll.append(0);
ll.append(2);
ll.append(3);
ll.append(4);
ll.insert(1, 1);
// ll.prepend('gold');
// ll.deleteHead();
// ll.deleteTail();
// console.log(ll);
