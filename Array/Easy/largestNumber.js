function largestNumber(numsArray) {
    let maxIndex = 0;
    for (let i = 1; i <= numsArray.length - 1; i++) {
        if (numsArray[maxIndex] < numsArray[i]) {
            maxIndex = i;
        }
    }
    return numsArray[maxIndex];
}

console.log(largestNumber([1, 23, 4, 3, 2, 4, 3, 222, 4]));