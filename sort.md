# Sorting Algorithms
Types:
Bubble sort
Selection sort
Insertion sort

Merge sort
Heap sort
Quick sort

Bucket sort
Radix sort

## Bubble Sort

* Compare pairs of items, swapping them if they are out of order
* Items “bubble” to the right place
* Take a minute to come up with a pseudocode to sort this array
  * Array = {88, 33, 99, 22, 54}

**What do you need?**
* Loops to iterate through the array
* Compare mechanism (if statements) to compare two elements
* A swap function so you can call it every time you need to swap items based on your comparison
  * temp = valA;  
  * valA = valB;
  * valB = temp; 

````js
function bubbleSort2(array) {
    let swaps = 0;
    for (let i=0; i<array.length - 1; i++) {
        for (let i=0; i<array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
            swaps++;
            }
        }
    }
    return array;
}
````

**performance**
Best case: Array is in the correct order – O(n)
Worst case: Every value has to be swapped – O(n^2)
Average case: O(n^2)

## Merge Sort

* Introduces divide and conquer
* A recursive algorithm
* 2 main parts
  * Split the array in 2 and recursively sort each side separately
  * Merge the 2 parts

**performance**:
All cases: O(n * log(n))


## Quick Sort

* An elegant algorithm
* Different than Merge sort in that it operates in-place
* Key element in Quicksort
  * Pivot: an element in the array that you select so you can compare every other element against it
  * Partitioning: divide and conquer approach, partition array in halves
​**Consider an element in the array as the pivot**
* Rearrange the elements in the array such that
  * All elements less than pivot on the left side
  * All elements greater than pivot on the right side

## Quick Sort - Partition

**Consider a pivot**
* Consider i to keep track of left and j to keep track of right side
* While i <= j 
  * Keep moving i to right, until you find element > = pivot
  * Keep moving j to left until you find element < = pivot
  * When i & j stops, swap elements at i and j
* When i > j, swap i with pivot