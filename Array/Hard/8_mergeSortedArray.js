// Problem statement: Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.
// we can use GAP ALGO for this problem, this is part of shell sort
// approach is simple
// calculate the gap and run the loop till gap === 1;
// gap = Math.ceil(length/2)
// left = 0;
// right = left + right;
// for below example gap = 3, so left = 0, right = 3
// so now left is in arr1 and right is in arr2
// [1,2,3] [2,5,7]
//  |       |
// in next interation, gap = 2, so left = 0, right = 2
// so now both pointers will be in arr1
// [1,2,3] [2,5,7]
//  |   |

const mergeGap = function (arr1, m, arr2, n) {
    let gap = Math.ceil((m + n) / 2);

    let length = m + n;

    while (gap > 0) {
        let left = 0;
        let right = left + gap;

        while (right < length) {

            if (left < m && right >= m) { // this is first pointer is in arr1 and second pointer is in arr2
                swapIfGreater(arr1, left, arr2, right - m);
            } else if (left >= m) { // this is where both pointers are in arr2, so just checking with left pointer
                swapIfGreater(arr2, left - m, arr2, right - m);
            } else { // this is where both pointers are in arr1
                swapIfGreater(arr1, left, arr1, right);
            }
            left++;
            right++;

        }

        if (gap === 1) break; // break the loop the movement gap = 1 and Math.ceil(1/2) will be 1 again

        gap = Math.ceil(gap / 2);

    }

    for (let i = m; i < length; i++) {
        arr1[i] = arr2[i - m]; // to move all the elements in arr1
    }

    return arr1;

}

const swapIfGreater = (arr1, index1, arr2, index2) => {
    if (arr1[index1] > arr2[index2]) {
        let temp = arr1[index1];
        arr1[index1] = arr2[index2];
        arr2[index2] = temp;
    }
}


// this is simplier way of solving, just have array to store answer, and have two pointers in two array's, and check for minimum in the two pointers
// this is just merge sort implementation
const mergeBrute = function (nums1, m, nums2, n) {
    let result = [];
    let left = 0;
    let right = 0;

    while (left < m && right < n) {

        if (nums1[left] <= nums2[right]) {
            result.push(nums1[left]);
            left++;
        } else {
            result.push(nums2[right]);
            right++;
        }

    }

    while (left < m) {
        result.push(nums1[left]);
        left++;
    }

    while (right < n) {
        result.push(nums2[right]);
        right++;
    }

    for (let i = 0; i < m + n; i++) {
        nums1[i] = result[i];
    }

    return result;

};


console.log(mergeGap([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [ 1, 2, 2, 3, 5, 6 ]