class Queue {
  constructor() {
    this.items = [];
  }

  //* O(1)
  enqueue(item) {
    this.items.push(item);
  }

  //* O(1)
  dequeue(item) {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.shift(item);
  }

  //* O(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[0];
  }

  //* O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  //* O(n)
  print() {
    console.log([...this.items].reverse().join(" -> "));
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
