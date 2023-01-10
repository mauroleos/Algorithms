class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    const enqueue = (data) => {
      const newNode = new Node(data);
      if (!this.head) this.head = newNode;
      if (this.tail) this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    };
    const dequeue = () => {
      let current = this.head;
      this.head = this.head.next;
      this.size--;
      return current;
    };
    const peek = () => {
      return this.head.data;
    };

    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.peek = peek;
  }
}

const queue = new Queue();
queue.enqueue("red");
queue.enqueue("blue");
queue.enqueue("green");
queue.dequeue();
console.log(queue);
