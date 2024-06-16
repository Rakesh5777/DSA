// Problem Statement : Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order
// we just need to find lower bound for this question as the answer
// what is lower bound ? lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.
// [1,2,2,4,5] if target is 2, lower bound is index 1, 1 is the smallest index which satisfies nums[1] >= 2
// [3,5,8,15,19] if target is 9, lower bound is index 3, as 15 >= 9

var searchInsertWithLowerBound = function (nums, x) {
    let low = 0;
    let high = nums.length - 1;

    let ans = nums.length; // when given target is greater than all of the elements in array, given number should go to last place

    while (low <= high) {
        let mid = low + (high - low) / 2;
        mid = Math.floor(mid);

        if (nums[mid] >= x) { // as we already got the greater number than x, no point of searching right side, so we are going left side
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }

    return ans;
};

// ---------------- we can find floor and insert element just after floor

var searchInsertWithFloor = function (nums, x) {
    let low = 0;
    let high = nums.length - 1;

    let floor = -1;

    while (low <= high) {
        let mid = low + (high - low) / 2;
        mid = Math.floor(mid);

        // as we already got smaller number, going left (<-) will give even more smaller, so we go right (->)
        if (nums[mid] <= x) {
            floor = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }

    }
    // if floor is given number, then return floor, or else insert just after floor
    return nums[floor] === x ? floor : floor + 1;
};

console.log(searchInsertWithLowerBound([1, 3, 5, 6], 7)) // 4;