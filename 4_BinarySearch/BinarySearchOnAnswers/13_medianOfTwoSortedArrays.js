var findMedianSortedArrays = function (nums1, nums2) {
    return sortAndMerge(nums1, nums2);

};

function sortAndMerge(numsArray, numsArray1) {
    const end = Math.ceil((numsArray.length + numsArray1.length) / 2);
    let firstPointer = 0;
    let secondPointer = 0;
    let tempSortedArray = []; // store only what is required with this condition if (count === end - 1 || count === end)
    let count = 0; // the movement we got count - 1 === end then we can break, as we got required elements to find median

    //compare elements and pust till atleast one part of array is inserted
    while (firstPointer <= numsArray.length - 1 && secondPointer <= numsArray1.length - 1) {
        if (numsArray[firstPointer] <= numsArray1[secondPointer]) {
            if (count === end - 1 || count === end) tempSortedArray.push(numsArray[firstPointer])
            firstPointer++;
        } else {
            if (count === end - 1 || count === end) tempSortedArray.push(numsArray1[secondPointer]);
            secondPointer++;
        }
        count++;
        if (count - 1 === end) break;
    }

    // to copy left over elements in first part of array;
    while (firstPointer <= numsArray.length - 1) {
        if (count === end - 1 || count === end) tempSortedArray.push(numsArray[firstPointer]);
        firstPointer++;
        count++;
        if (count - 1 === end) break;
    }

    // to copy left over elements in second part of array;
    while (secondPointer <= numsArray1.length - 1) {
        if (count === end - 1 || count === end) tempSortedArray.push(numsArray1[secondPointer]);
        secondPointer++;
        count++;
        if (count - 1 === end) break;
    }

    const num = numsArray.length + numsArray1.length;

    if (num % 2 === 0) {
        return (tempSortedArray[0] + tempSortedArray[1]) / 2
    } else {
        return tempSortedArray[0];
    }
}