//select the minimum number in the array and swap with current index, and loop every index and make sure to ignore already sorted part in right
//At the current index, select the minimum element from all elements in the LEFT of the array and SWAP

function selectionSort(numsArray) {
    for (let i = 0; i < numsArray.length - 1; i++) { //length - 1, as no need to check last element of array
        let minValueIndex = i;
        for (let j = i; j < numsArray.length; j++) {
            if (numsArray[j] < numsArray[minValueIndex]) minValueIndex = j;
        }
        if (minValueIndex != i) swap(numsArray, minValueIndex, i);
    }

    return numsArray;
}

function swap(array, first, second) {
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

console.log(selectionSort([1, 3, 2]));