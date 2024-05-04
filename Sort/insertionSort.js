// At given index, check if current element is minimum if not SWAP ADJACENT RIGHT till minimum condition fails 
// Takes an element and place it in its correct position

function insertionSort(numsArray) {
    for (let i = 1; i <= numsArray.length - 1; i++) {
        let j = i - 1;
        while (j >= 0 && numsArray[j + 1] < numsArray[j]) {
            swap(numsArray, j + 1, j);
            j--;
        }
    }
    return numsArray;
}

function swap(array, first, second) {
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

console.log(insertionSort([1, 4, 2, 3, 4, 5]));