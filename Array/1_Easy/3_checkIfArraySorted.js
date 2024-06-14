function isSorted(numsArray) {
    for (let i = 1; i <= numsArray.length - 1; i++) {
        if (numsArray[i] < numsArray[i - 1]) return false;
    }
    return true;
}

console.log(isSorted([1, 2, 3, 4, 7, 8, 9, 9]))