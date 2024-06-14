function secondLargestNumber(numsArray) {
    let largestNumber = -Infinity;
    let secondLargestNumber = -Infinity;
    for (let i = 0; i <= numsArray.length - 1; i++) {
        if (numsArray[i] > largestNumber) {
            secondLargestNumber = largestNumber;
            largestNumber = numsArray[i];
        } else if (numsArray[i] > secondLargestNumber && numsArray[i] !== largestNumber) {
            secondLargestNumber = numsArray[i];
        }
    }
    return secondLargestNumber;
}

console.log(secondLargestNumber([1, 2, 3, 4, 4, 4]))