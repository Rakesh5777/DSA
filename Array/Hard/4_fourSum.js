// Problem Statement: Given an array of N integers, your task is to find unique quads that add up to give a target value. In short, you need to return an array of all the unique quadruplets [arr[a], arr[b], arr[c], arr[d]] such that their sum is equal to a given target.
// intution is sort the array, and have two pointers fixed and play with two poitner, start from i = 0, j = i + 1 and have two pointers k and l 
// this is just like three sum problem, it is exactly same

const fourSum = function (nums, target) {
    const n = nums.length;

    // sort elements before start of the process, because we can keep track while calculating sum, we will know which direction to go
    nums.sort((a, b) => a - b);
    let result = [];

    let k = 0;
    let l = 0;

    // two loops for two fixed pointers
    for (let i = 0; i < n - 1; i++) {
        if (i != 0 && nums[i] === nums[i - 1]) continue; // this is to find next non duplicate value
        // fixed pointer loop
        for (let j = i + 1; j < n - 1; j++) {
            if (j != i + 1 && nums[j] === nums[j - 1]) continue; // this is to find next non duplicate value

            k = j + 1;
            l = n - 1;

            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];

                if (sum > target) {
                    // as sum is greater than zero and we know array is sorted, we need to decrease sum, which means we have to move k to left, so that we will get smaller number to add
                    l--;
                } else if (sum < target) {
                    // as sum is less than zero, we have to move j right, as we need to increase sum
                    k++
                } else {
                    result.push([nums[i], nums[j], nums[k], nums[l]]);
                    k++; // move k right, to find next triplet 
                    l--;  // move l left, to find next triplet
                    while (k < l && nums[k] === nums[k - 1]) k++; //this is to find next non duplicate which we haven't processed 
                    while (k < l && nums[l] === nums[l + 1]) l--; //this is to find next non duplicate which we haven't processed 
                }

            }
        }
    }

    return result;
};
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0))