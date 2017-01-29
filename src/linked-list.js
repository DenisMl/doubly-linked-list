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
        let currentPrevNode = currentNode.prev;
        node.next = currentNode;
        currentNode.prev = node;
        currentPrevNode.next = node;
        node.prev = currentPrevNode;

      }
      this.length++;
      return this;
    }

    isEmpty() {
      if (!this.length) return true;
      return false;
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
