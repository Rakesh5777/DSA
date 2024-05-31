var rearrangeArray = function (nums) {
    let firstPointer = 0; // use this to find positive 
    let secondPointer = 0; // use this to find negative
    let result = [];

    while (firstPointer < nums.length && secondPointer < nums.length) {

        while (nums[firstPointer] < 0) firstPointer++;
        while (nums[secondPointer] > 0) secondPointer++;

        if (firstPointer < nums.length) result.push(nums[firstPointer]);
        if (secondPointer < nums.length) result.push(nums[secondPointer]);

        firstPointer++;
        secondPointer++;
    }

    return result;
};