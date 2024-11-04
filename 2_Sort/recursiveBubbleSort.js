// its just bubble sort, push the maxium to the left with adjesant swaps, so that max will be last of the array;

function bubbleSortWrapper(numsArray) {
    return bubbleSort(numsArray, numsArray.length - 1)
}

function bubbleSort(numsArray, high) {
    if (high <= 1) return numsArray;
    let didswap = false;
    for (let i = 0; i <= high - 1; i++) {
        if (numsArray[i] > numsArray[i + 1]) {
            didswap = true;
            swap(numsArray, i, i + 1);
        }
    }

    if (!didswap) return numsArray;

    return bubbleSort(numsArray, high - 1);
}

function swap(numsArray, firstIndex, secondIndex) {
    const temp = numsArray[firstIndex];
    numsArray[firstIndex] = numsArray[secondIndex];
    numsArray[secondIndex] = temp;
}

console.log(bubbleSortWrapper([1, 4, 2, 45, 3, 2, 4, 5, 2]))