// Problem Statement: You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M' denote the number of rows and columns, respectively. The elements of each row are sorted in non-decreasing order. Moreover, the first element of a row is greater than the last element of the previous row (if it exists). You are given an integer ‘target’, and your task is to find if it exists in the given 'mat' or not.
// intution is we have to convert 2D array as 1D array, but if we loop and convert it to 1D array then space complexity will increase and so is time complexity
// there is way to read 2D array at 1D, we just need to get total no of elements in 2D array 
// m * n will give us total no of elements, to get indices we have formula 
// to get row we just need to divide with n row = i / n
// to get column in the row we have to do mod with n col = i % n


function searchMatrix(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let low = 0;
    let high = m * n - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midValue = matrix[Math.floor(mid / n)][mid % n];

        if (midValue === target) return true;
        if (midValue < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
};

console.log(searchMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)) // true