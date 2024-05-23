function removeDuplicates(numsArray) {
    if (numsArray.length === 0) return 0;
    if (numsArray.length === 1) return 1;
    let i = 0;
    for (let j = 1; j <= numsArray.length - 1; j++) {
        if (numsArray[i] != numsArray[j]) {
            i++;
            numsArray[i] = numsArray[j];
        }
    }
    return [numsArray, i + 1];
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 9, 9]))