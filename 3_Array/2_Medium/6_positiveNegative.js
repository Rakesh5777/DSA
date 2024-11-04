// Problem Statement: There’s an array ‘A’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.

var rearrangeArray = function (nums) {
    let firstPointer = 0; // use this to find positive 
    let secondPointer = 0; // use this to find negative
    let result = [];

    while (firstPointer < nums.length && secondPointer < nums.length) {

        while (nums[firstPointer] < 0) firstPointer++; // find next postive number
        while (nums[secondPointer] >= 0) secondPointer++; // find next negative number

        if (firstPointer < nums.length) result.push(nums[firstPointer]); // push positive number
        if (secondPointer < nums.length) result.push(nums[secondPointer]); // push negative number 

        firstPointer++;
        secondPointer++;
    }

    return result;
};

console.log(rearrangeArray([1, 2, -1, 3, 1, -4, 5, 6, -3, -1, -2, 5])); // [ 1, -1,  2, -4,  3, -3,  1, -1,  5, -2, 6 ]