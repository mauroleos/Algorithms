class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    let size = 0;
    const push = (data) => {
      const newNode = new Node(data, this.head);
      this.head = newNode;
      this.size++;
    };
    const pop = () => {
      const current = this.head;
      this.head = this.head.next;
      this.size--;
      return current;
    };
    const peek = () => {
      return this.head.data;
    };
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.size = size;
  }
}

const stack = new Stack();
stack.push("red");
stack.push("blue");
stack.push("green");
stack.pop();

console.log(stack.size);
