#!/usr/bin/env node

import { LinkedList } from "./index.js";

const list = new LinkedList();

list.appendValue("dog");
list.appendValue("cat");
list.appendValue("parrot");
list.appendValue("hamster");
list.appendValue("snake");
list.appendValue("turtle");

console.log(list.toString());

//check size
const size = list.countSize();
console.log("size", size); // 6

// check head
const head = list.headFirstNode();
console.log("head", head); // dog

//check tail
const tail = list.tailEndNode();
console.log("tail", tail); // turtle

//check pop
// list.pop();
// console.log("list popped", list);

//check contains
const contains = list.contains("parrot");
console.log("contains", contains); //true

const containsRecursive = list.containsRecursive("parrot");
console.log("containsRecursive", containsRecursive); //true

//check at(index)
const atIndexValue = list.at(2);
console.log("atIndex", atIndexValue); //parrot

const atRecursiveValue = list.atRecursive(0);
console.log("atRecursive", atRecursiveValue); //dog

//check find(index)
const findIndex = list.find("parrot");
console.log("findIndex", findIndex); // bug

//check string
const listString = list.toString();
console.log("toString", listString);

//check insert
const insertAt = list.insertAt("corgi", 3);
console.log("insertAt", list);

//removeAt
const removed = list.removeAt(1);
console.log("modifiedRemove", list);

console.log(list.toString());
