#!/usr/bin/env node

// Two classes or factories
// Class or factory which will represent the full list
export class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  countSize() {
    let size = 1; // has to be 1 because to account for the head when you start the while loop
    if (this.head == null) {
      size = 0;
    } else {
      let currentList = this.head;
      while (currentList.nextNode !== null) {
        size++;
        currentList = currentList.nextNode;
      }
    }
    return size;
  }

  headFirstNode() {
    return this.head.data;
  }

  tailEndNode() {
    let currentList = this.head;
    while (currentList.nextNode !== null) {
      currentList = currentList.nextNode;
    }
    return currentList.data;
  }

  // append(value) adds a new node containing value to the end of the list
  appendValue(data) {
    let newNode = new Node(data);
    // check if the head is null if not then it means that the list is empty, if so assign the data to the head
    if (this.head == null) {
      this.head = newNode;
    } else {
      // if the list is not empty assign everything else to the head and append the data to the nextNode which should be null (because it's the last)
      let currentList = this.head;
      while (currentList.nextNode !== null) {
        // while loop will keep running until it hits the condition
        currentList = currentList.nextNode; // this instructs 'hey move on to the next node, the contents of the nextNode contains everything after it.
      }
      currentList.nextNode = newNode; // assign the newNode once the while loop has exited because it confirms that you've reach the end where nextNode = null
    }
  }

  // prepend(value) adds a new node containing value to the start of the list
  prependValue(data) {
    let newNode = new Node(data);
    // take the head, assign it to something else, make the newNode and assign head and rest to the nextNode of the newly created node
    newNode.nextNode = this.head;
    this.head = newNode; // update the head to point to the new node
  }

  //pop removes the last element from the list
  pop() {
    let currentList = this.head;
    let previousNode;
    while (currentList.nextNode !== null) {
      previousNode = currentList;
      currentList = currentList.nextNode;
    }
    previousNode.nextNode = null;
    return currentList;
  }

  // contains(value) returns true of the passed value is in the list and otherwise returns false
  contains(value) {
    let currentList = this.head;
    let isContain = false;
    while (currentList !== null) {
      if (currentList.data === value) {
        isContain = true;
        break;
      }
      currentList = currentList.nextNode;
    }
    return isContain;
  }

  containsRecursive(value, currentList = this.head) {
    if (currentList.data === value) {
      return true;
    }
    if (currentList.nextNode === null) {
      return false;
    }
    return this.containsRecursive(value, currentList.nextNode);
  }

  at(index) {
    let currentList = this.head;
    let currentIndex = 0;
    let foundData = null;
    while (currentList !== null) {
      if (currentIndex == index) {
        foundData = currentList.data;
      }
      currentIndex++;
      currentList = currentList.nextNode;
    }
    return foundData;
  }

  atRecursive(index) {
    const recursiveAt = (node, currentIndex) => {
      if (node === null) {
        return null;
      }
      if (currentIndex === index) {
        return node.data;
      }
      return recursiveAt(node.nextNode, currentIndex + 1);
    };
    return recursiveAt(this.head, 0);
  }

  // find(value) returns the index of the nose containing value, or null if not found

  find(value) {
    let currentList = this.head;
    let index = 0;

    while (currentList !== null) {
      if (value === currentList.data) {
        return index;
      }
      index++;
      currentList = currentList.nextNode;
    }

    return null;
  }

  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  // the format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let currentList = this.head;
    let listString = "";

    while (currentList !== null) {
      let nodeAsString = `(${currentList.data}) -> `;
      listString = listString.concat(nodeAsString);
      currentList = currentList.nextNode;
    }

    return listString;
  }

  // insertAt(value, index) that inserts a new node with the provided value at the given index
  insertAt(value, index) {
    let currentList = this.head;
    let latterNode;
    let currentIndex = 0;

    if (index === 0) {
      this.prependValue(value);
      return this.head;
    }

    while (currentList !== null) {
      if (currentIndex !== index) {
        currentIndex++;
        currentList = currentList.nextNode;
      }
      if (currentIndex == index) {
        latterNode = currentList.nextNode;
        let newNode = new Node(value);
        newNode.nextNode = latterNode;
        currentList.nextNode = newNode;
        return currentList;
      }
    }
  }
  //removeAt(index) that removes the node at the given index
  removeAt(index) {
    let currentList = this.head;
    let currentIndex = 0;
    let previousNode;

    if (this.head === null || index < 0) {
      return;
    }

    if (index === 0) {
      this.head = currentList.nextNode;
      return;
    }

    while (currentList !== null) {
      if (currentIndex === index) {
        previousNode.nextNode = currentList.nextNode;
        return;
      }
      previousNode = currentList;
      currentList = currentList.nextNode;
      currentIndex++;
    }
  }
}
// Class containing a value property and a nextNode property, st both as null by default
export class Node {
  constructor(data = null) {
    this.data = data;
    this.nextNode = null;
  }
}

// // Check appendValue
// const list = new LinkedList();
// list.appendValue(5);
// list.prependValue(6);
// console.log(list);

// //check size
// const size = list.countSize();
// console.log("size", size);

// // check head
// const head = list.headFirstNode();
// console.log("head", head);

// //check tail
// const tail = list.tailEndNode();
// console.log("tail", tail);

// //check pop
// // list.pop();
// // console.log("list popped", list);

// //check contains
// const contains = list.contains(1);
// console.log("contains", contains);

// const containsRecursive = list.containsRecursive(1);
// console.log("containsRecursive", containsRecursive);

// //check at(index)
// const atIndexValue = list.at(0);
// console.log("atIndex", atIndexValue);

// const atRecursiveValue = list.atRecursive(0);
// console.log("atRecursive", atRecursiveValue);

// //check find(index)
// const findIndex = list.find(6);
// console.log("findIndex", findIndex);

// //check string
// const listString = list.toString();
// console.log("toString", listString);

// //check insert
// const insertAt = list.insertAt(10, 0);
// console.log("insertAt", list);

// //removeAt
// const removed = list.removeAt(0);
// console.log("modifiedRemove", list);
