function selectionSort(numsArray) {
    let i = 0; j = 0;
    for (i = 0; i < numsArray.length - 1; i++) { //length - 1, as no need to check last element of array
        let minValueIndex = i;
        for (j = i; j < numsArray.length; j++) {
            if (numsArray[j] < numsArray[minValueIndex]) minValueIndex = j;
        }
        if (minValueIndex != i) {
            const minValue = numsArray[minValueIndex];
            numsArray[minValueIndex] = numsArray[i];
            numsArray[i] = minValue;
        }
    }

    return numsArray;
}

console.log(selectionSort([1, 3, 2]));