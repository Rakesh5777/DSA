function lenOfLongSubarr(arr, n, k) {
    const map = {};
    let sum = 0;
    let maxLength = 0;

    for (let i = 0; i <= n - 1; i++) {
        sum += arr[i]; // have prefix sum

        if (sum === k) { // compare with k and find the length
            maxLength = i + 1;
        }

        // if sum is not equal to k, suppose if we assume there is longest sub array, then sum = expected + k so expected = sum - k
        // check if expected is present in map, if present take the index from map and sub track  

        let expected = sum - k;

        if (expected in map) {
            maxLength = maxLength > i - map[expected] ? maxLength : i - map[expected];
        }

        // if zero are present in example 2, 0, 0, 4 -> if i dont keep this condition then at place of third zero i ll update map with {2: 2}
        // and if k = 4 at last index we will have sum as 6 (2 + 0 + 0 + 4) and in map we will have 2 index which will give us minimun
        // so we will only update if sum is alredy not there in map
        if (!(sum in map)) {
            map[sum] = i;
        }

    }

    return maxLength;
}

// this is only for positive numbers
// two pointer approach, intution is to move right pointer till the sum is k, while doing so if it exceeds the sum, we will move left pointer
// and we will move the right pointer till the end
function lenOfLongSubarrTwoPointer(arr, n, k) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let maxLength = 0;

    while (right < n) {
        sum += arr[right];

        // if sum exceeds the k, here we will adjust the sum
        while (left <= right && sum > k) {
            // INFO: because of this adjustment, if there is negative sum will add (6 - (-3) = 9) and window size become unpredictable and wrong
            sum -= arr[left];
            left++;
        }

        if (sum === k) {
            const currentLength = right - left + 1;
            maxLength = Math.max(maxLength, currentLength);
        }

        right++;
    }

    return maxLength;
}



// console.log(lenOfLongSubarr([10, 4, 3, 3, 5, 5], 6, 16));
console.log(lenOfLongSubarrTwoPointer([1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1], 14, 6));
// console.log('result', lenOfLongSubarr([-13, 0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6], 17, 15));
// console.log(lenOfLongSubarr([7, 4, -17, -13, -15, 1, 16, 7, 16, -15, -7, -7, -18, 19, 11, -13, 10 - 16], 18, 30));
