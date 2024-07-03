// Problem Statement: Given an array of N integers. Every number in the array except one appears twice. Find the single number in the array.
// Intution is simple, it is easy to explain with example 
// [1,1,2,2,3,4,4,5,5] at any given point there will be two cases to eleminate one part of the array 
// if we take 2 of index 3, we have to check which direction other 2 is, is it there in left side then length of [1 (0 index) -> 2 (3 index)] is 4
// other side of 2, length is 5
// so single unique will be in side of odd number length

var singleNonDuplicate = function (nums) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid - 1] === nums[mid]) { // checking for previous number as same number
            let length = mid - low + 1;
            if (length % 2 === 0) {
                low = mid + 1;
            } else {
                high = mid;
            }
        } else if (nums[mid + 1] === nums[mid]) { // checking for next number as same number
            let length = high - mid + 1;
            if (length % 2 === 0) {
                high = mid - 1;
            } else {
                low = mid;
            }
        } else { // if mid is not equal to previous and next then return it
            return nums[mid]
        }
    }
};

// Approach TWO
// Intution is simple, it is easy to explain with example 
// [1,1,2,2,3,4,4] given array 
// [0,1,2,3,4,5,6] index of array
//  First 1 has EVEN index (0)
//  First 2 has EVEN index (2)
//  unique number 3 (after unique number First index will change to odd);
//  First 4 has ODD index (5)


var singleNonDuplicateIndexEvenOrOdd = function (nums) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid - 1] != nums[mid] && nums[mid + 1] != nums[mid]) return nums[mid]; // if mid is not equal to previous and next simply return

        if (nums[mid - 1] === nums[mid]) { // if mid is 2nd of equal number (2,'2') if mid = '2'
            mid = mid - 1; // we will reset mid to 1st place so that it will be easy to calculate
        }

        if (mid % 2 === 0) { // if mid is even, then obviosly we still didn't cross unique number, so we will go right part
            low = mid + 2; // mid + 2 is because we have already validated, mid and mid + 1 are equal numbers 
        } else {
            high = mid - 1;
        }

    }
};

console.log(singleNonDuplicateIndexEvenOrOdd([1, 1, 2, 2, 3, 4, 4])) // 3