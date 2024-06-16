// Problem statement: You are given a sorted array of integers and a target, your task is to search for the target in the given array. Assume the given array does not contain any duplicate numbers.
// binary search works by splitting searching space, with every iterations 
// we will make given array half and find which half to find, as given array is SORTED we can do 

const search = function (nums, target) {
    return binarySearch(nums, 0, nums.length - 1, target);
};

function binarySearch(nums, low, high, target) {

    while (high > low) {

        let mid = Math.floor(low + (high - low) / 2); // this calculation is for safer side, as for largers integers, when high is maximum integer, high + low will be give us error

        if (nums[mid] === target) {
            return mid // the movement we find the element just return the index
        } else if (nums[mid] > target) { // if nums[mid] is greater than given target, as nums is sorted we dont need to check array from mid to high 
            high = mid - 1;
        } else if (nums[mid] < target) { // if nums[mid] is less than given target, as nums is sorted we dont need to check array from low to mid 
            low = mid + 1;
        }
    }

    return -1;
}

function binarySearchRecursive(nums, low, high, target) {
    if (high < low) return -1;
    let mid = Math.floor(low + (high - low) / 2); // this calculation is for safer side, as for largers integers, when high is maximum integer, high + low will be give us error

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) return binarySearchRecursive(nums, mid + 1, high, target);
    else if (nums[mid] > target) return binarySearchRecursive(nums, low, mid - 1, target);
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1