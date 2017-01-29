const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      const node = new Node(data);
      if (this.length) {
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
      }
      else {
        this._head = node;
        this._tail = node;
      }
      this.length++;
      return this;
    }

    head() {
      if (this._head) {
        return this._head.data;
      }
      else {
        return false;
      }
    }

    tail() {
      if (this._tail) {
        return this._tail.data
      }
      else {
        return false;
      }
    }

    at(index) {
      if (this.length === 0 || index < 0 || index > this.length) {
        throw new Error(message.failure);
      }
      else {
        let currentNode = this._head;
        for (let i = 0; i < index; i++) {
          currentNode = currentNode.next;
        }
        return currentNode.data;
      }
    }

    insertAt(index, data) {
      if (this.length === 0 || index < 0 || index > this.length) {
        throw new Error(message.failure);
      }
      else {
        const node = new Node(data);
        let currentNode = this._head;
        for (let i = 0; i < index; i++) {
          currentNode = currentNode.next;
        }
        let currentNextNode = currentNode.next;
        currentNode.next = node;
        node.prev = currentNode;
        node.next = currentNextNode;
        currentNextNode.prev = node;
      }
      this.length++;
      return this;
    }

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
