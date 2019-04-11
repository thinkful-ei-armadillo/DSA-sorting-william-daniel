'use strict';

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }

  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
}


function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}


function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  console.log(array);
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
}

// Understanding merge sort
// Given the following list of numbers 
// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// [21,1]

// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// After 16 recursive calls, the array will be fully sorted in ascending order after being divided and merged/combined.

// What are the first 2 lists to be merged?
// 21 and 1

// Which two lists would be merged on the 7th merge?
// 43 and 34

// Understanding quicksort
// 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array 
// in ascending order. After the first partition step has been completed, the contents of the
//  array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements 
//  is correct about the partition step? Explain your answer.

// The pivot could have been either 14 or 17 = this is correct because all the values to the left of both are less than the values of either 14 or 17

// 2) Given the following list of numbers 
let array1 = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
// console.log(quickSort(array1));
// show the resulting list after the second partitioning according to the quicksort algorithm.

// When using the last item on the list as a pivot
// [ 3, 9, 10, 12, 19, 14, 17, 16, 13, 15 ];

// When using the first item on the list as a pivot
// [ 14, 13, 10, 3, 9, 12, 15, 16, 19, 17 ];


// Implementing quicksort
// Write a function qSort that sorts a dataset using the quicksort algorithm. 
// The dataset to sort is: 
const data = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
const dataset = data.split(' ').map(num => Number(num));
// console.log(dataset);

function qSort(array, start=0, end = array.length) {
  if(start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle+1, end);
  return array;
}

// console.log(qSort(dataset));

// Implementing merge sort
// Write a function mSort that sorts the dataset above using the merge sort algorithm.

function mSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  return mergeHelper(left, right, array);
}

function mergeHelper(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

// console.log(mSort(dataset));

// Sorting a linked list using merge sort
// Given a Linked List, sort the linked list using merge sort. You will need your linked list 
// class from previous lesson to create the list and use all of its supplemental functions to solve this problem.
const LinkedList = require('./linked-list');
const _Node = require('./linked-list');

// input: 
// output: sorted LL in ascending order
// compare currNode to currNode.next and sort depending on which ones larger

function sortLinkedList(head) {
  //base case
  if (head === null || head.next !== null) {
    return head;
  }
  
  let prev = null;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  prev.next = null;
  const list1 = sortLinkedList(head);
  const list2 = sortLinkedList(slow);

  return mergeLinkedList(list1, list2);
}

function mergeLinkedList(l1, l2) {
  const head = new _Node();
  let curr = head;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    curr = curr.next;
  }

  curr.next = (l1 === null) ? l2 : l1;

  return head.next;
}

function main() {
  let ll = new LinkedList();

  ll.insertFirst(1);
  ll.insertLast(5);
  ll.insertLast(4);
  ll.insertLast(3);
  ll.insertLast(2);

  console.log(JSON.stringify(sortLinkedList(ll.head), null, 2));

}

main();

// this is O(1)

// Bucket sort
// Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.

// input: [1, 3, 2, 5, 4, 7, 6, 9, 8, 10], low = 1, high = 10
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function bucketSort(array, low, high) {
  const newArr = [];
  for (let i = 0; i < high; i++) {
    newArr[i] = ('');
  }

  for (let i = 0; i < array.length; i++) {
    newArr[array[i] - low] = (array[i]);
  }
  return newArr;
}

// let data1 = [1, 3, 2, 5, 4, 7, 6, 9, 8, 10];
// console.log(bucketSort(data1, 1, 10));


// Sort in place
// Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).



function shuffle(array, counter=0) {
  while(counter < array.length) {
    let randomIdx = Math.floor(Math.random() * array.length);
    swap(array, counter, randomIdx);
    counter++;
    return shuffle(array, counter);
  }
  return array;
}

let data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(shuffle(data2));


// Sorting books
// Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and them implement your algorithm.

// compare strings of 2 books at its index
// use quick sort and maybe merge sort

let books = ['Game of this Thrones', 'Lord of the Rings', 'Of Mice and Men', '1984', 'A Brief History of Time', 'All the Presidents Men', 'Fahrenheit 451', 'Harry Potter', 'Pride and Prejudice', 'Hunger Games', 'The Very Hungry Caterpillar', 'To Kill a Mockingbird', 'A Wrinkle in Time', 'Corduroy'];
// console.log(books.length);

// console.log(qSort(books));