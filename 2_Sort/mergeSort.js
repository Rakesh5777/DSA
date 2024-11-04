// this is simple recursive algo, divide array into subarrays till middle and merge them by sorting
//Time complexity is O(nlogn)


function mergeSortWrapper(numsArray) {
    const low = 0;
    const high = numsArray.length - 1;
    return mergeSort(numsArray, low, high);
}

function mergeSort(numsArray, low, high) {
    if (low === high) return // this can ideally be low === high, but just to be extra cautions kept low >= high
    const mid = Math.floor((low + high) / 2);
    mergeSort(numsArray, low, mid);
    mergeSort(numsArray, mid + 1, high);
    sortAndMerge(numsArray, low, mid, high);
    return numsArray;
}

function sortAndMerge(numsArray, low, mid, high) {
    let firstPointer = low;
    let secondPointer = mid + 1;
    let tempSortedArray = [];

    //compare elements and pust till atleast one part of array is inserted
    while (firstPointer <= mid && secondPointer <= high) {
        if (numsArray[firstPointer] <= numsArray[secondPointer]) {
            tempSortedArray.push(numsArray[firstPointer]);
            firstPointer++;
        } else {
            tempSortedArray.push(numsArray[secondPointer]);
            secondPointer++;
        }
    }

    // to copy left over elements in first part of array;
    while (firstPointer <= mid) {
        tempSortedArray.push(numsArray[firstPointer]);
        firstPointer++;
    }

    // to copy left over elements in second part of array;
    while (secondPointer <= high) {
        tempSortedArray.push(numsArray[secondPointer]);
        secondPointer++;
    }

    // this is to copy all numbers to result
    for (let i = 0; i < tempSortedArray.length; i++) {
        numsArray[low + i] = tempSortedArray[i];
    }
}

console.log(mergeSortWrapper([5, 4, 3, 2, 1, 0]));