// Problem Statement: You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M' denote the number of rows and columns, respectively. The elements of each row and each column are sorted in non-decreasing order.
// But, the first element of a row is not necessarily greater than the last element of the previous row (if it exists).
// You are given an integer ‘target’, and your task is to find if it exists in the given 'mat' or not.

// Intution is solution is based on observational binary search 
// for example 
// 1 2 3
// 4 5 6
// 7 8 9

// target is 4
// at any given point we cannot start from 1 or 9, as we can not choose path (if we are at 1, 4 can be either left to it or down to it)
// so we are left with poistion 3, 7 -> so if we start at these position, we can decide the path to go (target will be definitely in one direction)

var searchMatrix = function (matrix, target) {
    row = 0; col = matrix[0].length - 1; // we are starting at position 3 from above example 

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true; // if we find we return 

        if (matrix[row][col] > target) { // if target is greater, then it wont be down to it 
            col--;
        } else { // else it wont be left to it
            row++
        }
    }

    return false;
};



// most obvious solution but it is just better solution with O(m logn)
var searchMatrix = function (matrix, target) {
    const filteredMatrix = matrix.filter(row => row[0] <= target);
    return filteredMatrix.some(row => binarySearch(row, target));
};

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return true;
        }

        if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return false;
}

console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5))