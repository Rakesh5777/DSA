//Problem Statement: Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero. In short, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.
// intution is sort the array, and have three pointers, start from left, and left + 1 and right
// every iteration, just move left++ and right-- and let middle be left + 1
// calculate sum and if sum is less, move middle till we find sum and vise versa

var threeSum = function (nums) {
    let n = nums.length;

    // sort elements before start of the process, because we can keep track while calculating sum, we will know which direction to go
    nums.sort((a, b) => a - b);

    let result = [];

    let j = 0;
    let k = 0;

    // loop through every element in the array
    for (let i = 0; i < n - 1; i++) {

        if (i != 0 && nums[i] === nums[i - 1]) continue; // we dont have to check for same element, as duplicates are not allowed
        j = i + 1;
        k = n - 1;

        while (j < k) {

            let sum = nums[i] + nums[j] + nums[k];

            if (sum > 0) {
                // as sum is greater than zero and we know array is sorted, we need to decrease sum, which means we have to move k to left, so that we will get smaller number to add
                k--;
            } else if (sum < 0) {
                // as sum is less than zero, we have to move j right, as we need to increase sum
                j++;
            } else {
                // this is equal to case, when sum is equal to 0, we just need to push i, j, k in result
                result.push([nums[i], nums[j], nums[k]]);
                j++; // move j right, to find next triplet 
                k--; // move k left, to find next triplet

                while (j < k && nums[j - 1] === nums[j]) j++; // this is to find next non duplicate which we haven't processed 
                while (j < k && nums[k + 1] === nums[k]) k--; // this is to find next non duplicate which we haven't processed
            }
        }

    }

    return result;

};

console.log(threeSum([0, 0, 0]))