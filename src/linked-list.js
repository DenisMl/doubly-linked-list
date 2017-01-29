const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
    }

    append(data) {
      const node = new Node(data);
      if(this.length) {
      }
      else {
      }
      this.length++;
      return this;
    }

    head() {}

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
