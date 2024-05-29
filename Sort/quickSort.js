//select a pivot and we have to place it in right place
//and make sure in new array, all left elements from pivot are small and right are large
//and recursively call the functions

function quickSortWrapper(numsArray) {
    const low = 0;
    const high = numsArray.length - 1;
    return quickSort(numsArray, low, high);
}

function quickSort(numsArray, low, high) {
    if (low >= high) return numsArray;
    const pivotIndex = findPivotAndPutInCorrectPlace(numsArray, low, high);
    quickSort(numsArray, low, pivotIndex - 1);
    quickSort(numsArray, pivotIndex + 1, high);
    return numsArray;
}

function findPivotAndPutInCorrectPlace(numsArray, low, high) {
    let pivotIndex = low;
    swap(numsArray, pivotIndex, low); // this is to make any type of pivot to work
    let pivot = numsArray[low];
    let i = low;
    let j = high;
    while (i < j) {
        while (numsArray[i] <= pivot && i < high) i++;
        while (numsArray[j] > pivot && j > low) j--;
        if (i < j) swap(numsArray, i, j);
    }
    if (low != j) swap(numsArray, low, j);
    return j;
}


function swap(numsArray, firstIndex, secondIndex) {
    const temp = numsArray[firstIndex];
    numsArray[firstIndex] = numsArray[secondIndex];
    numsArray[secondIndex] = temp;
}

console.log(quickSortWrapper([4, 3, 5, 2, 1, 6]));