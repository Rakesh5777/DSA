// insert the current index to the left of it with recursive appraoch
function insertionSortWrapper(numsArray) {
    return insertionSort(numsArray, 1);
}

function insertionSort(numsArray, low) {
    if (low >= numsArray.length) return numsArray;
    for (let i = low; i > 0; i--) {
        if (numsArray[i - 1] > numsArray[i]) swap(numsArray, i, i - 1);
    }
    return insertionSort(numsArray, low + 1);
}

function swap(numsArray, firstIndex, secondIndex) {
    const temp = numsArray[firstIndex];
    numsArray[firstIndex] = numsArray[secondIndex];
    numsArray[secondIndex] = temp;
}

console.log(insertionSortWrapper([1, 2, 5, 3, 5, 2, 6, 2]));
