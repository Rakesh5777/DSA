var nextPermutation = function (nums) {

    // step 1: find the break point
    let breakPoint = -1;
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            breakPoint = i - 1;
            break;
        }
    }

    // step 2: if break point is not found, return by reversing
    if (breakPoint === -1) {
        return nums.reverse();
    }

    // Step 3: Find the smallest element larger than nums[breakPoint] to the right of breakPoint
    for (let i = nums.length - 1; i > breakPoint; i--) {
        if (nums[i] > nums[breakPoint]) {
            swap(nums, i, breakPoint);
            break;
        }
    }

    // Step 4: Reverse the elements to the right of breakPoint
    let left = breakPoint + 1;
    let right = nums.length - 1;
    while (left < right) {
        swap(nums, left, right);
        left++;
        right--;
    }

    return nums;
};

function swap(nums, first, second) {
    const temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp;
}


console.log(nextPermutation([1, 2, 4, 3]));