// this is simple recursive algo, divide array into subarrays till middle and merge them by sorting

function mergeSortWrapper(numsArray) {
    const low = 0;
    const high = numsArray.length - 1;
    return mergeSort(numsArray, low, high);
}

function mergeSort(numsArray, low, high) {
    if (low >= high) return numsArray;
    const mid = Math.floor((low + high) / 2);
    mergeSort(numsArray, low, mid);
    mergeSort(numsArray, mid + 1, high);
    sortAndMerge(numsArray, low, mid, high);
    return numsArray;
}

function sortAndMerge(numsArray, low, mid, high) {
    let firstPointer = low;
    let secondPointer = mid + 1;
    let sortedArray = [];

    while (firstPointer <= mid && secondPointer <= high) {
        if (numsArray[firstPointer] <= numsArray[secondPointer]) {
            sortedArray.push(numsArray[firstPointer]);
            firstPointer++;
        } else {
            sortedArray.push(numsArray[secondPointer]);
            secondPointer++;
        }
    }

    while (secondPointer <= high) {
        sortedArray.push(numsArray[secondPointer]);
        secondPointer++;
    }

    while (firstPointer <= mid) {
        sortedArray.push(numsArray[firstPointer]);
        firstPointer++;
    }

    for (let i = low; i <= high; i++) {
        numsArray[i] = sortedArray.shift();
    }
}

console.log(mergeSortWrapper([5, 4, 3, 2, 1, 0]));