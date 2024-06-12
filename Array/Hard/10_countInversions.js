// Problem Statement: Given an array of N integers, count the inversion of the array (using merge-sort).
// we will directly use merge sort to collect count while merging 
// Idea is while merging two SORTED ARRAYS we can easily count the inersions 
// so in merge sort, while merging we will count
// counting logic is simple, [2, 3] [1]
// when i merging this two, when i' m comparing 2 with 1, 2 is greater than 1, so as [2, 3] is sorted, `EVERYTHING IN THIS ARRAY AFTER 2` will also be greater than 1
// which means from 2 to end, length will be end - 2th index + 1
// so by this logic we will get count and add it up 
// Time complexity is O(nlogn)

function mergeSortWrapper(numsArray) {
    const low = 0;
    const high = numsArray.length - 1;
    return mergeSort(numsArray, low, high);
}

function mergeSort(numsArray, low, high) {
    let count = 0;
    if (low === high) return count; // we are returning count here
    const mid = Math.floor((low + high) / 2);
    count += mergeSort(numsArray, low, mid); // this is to collect count from all sub function which are recurrsively called
    count += mergeSort(numsArray, mid + 1, high); // same here also collecting count
    count += sortAndMerge(numsArray, low, mid, high); // collecting count 
    return count; // returning count
}

function sortAndMerge(numsArray, low, mid, high) {
    let firstPointer = low;
    let secondPointer = mid + 1;
    let tempSortedArray = [];
    let count = 0

    while (firstPointer <= mid && secondPointer <= high) {
        if (numsArray[firstPointer] <= numsArray[secondPointer]) {
            tempSortedArray.push(numsArray[firstPointer]);
            firstPointer++;
        } else {
            count += mid - firstPointer + 1; // MAIN LOGIC WHERE WE ARE COUNTING INVERSIONS
            tempSortedArray.push(numsArray[secondPointer]);
            secondPointer++;
        }
    }

    while (firstPointer <= mid) {
        tempSortedArray.push(numsArray[firstPointer]);
        firstPointer++;
    }

    while (secondPointer <= high) {
        tempSortedArray.push(numsArray[secondPointer]);
        secondPointer++;
    }

    for (let i = 0; i < tempSortedArray.length; i++) {
        numsArray[low + i] = tempSortedArray[i];
    }

    return count; // counting the count and returning it
}

console.log(mergeSortWrapper([3, 2, 1])); // 3