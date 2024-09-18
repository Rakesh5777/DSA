// Problem statement: find the median of 2D matrix, with mlog(n) time complexity
// MEDIAN DOESN'T NEED TO BE IN THE MATRIX

// let req = Math.floor((rows * cols) / 2)
// intution is, if the number is median, it should have minimum req elements before it
// so we have to find least possible element with > req elements

function findMedian(matrix) {
    let rows = matrix.length;
    let col = matrix[0].length;
    let low = Infinity; // Initialize the lowest value as positive infinity
    let high = -Infinity; // Initialize the highest value as negative infinity

    // Find the lowest and highest values in the matrix
    for (let row of matrix) {
        low = Math.min(low, row[0]);
        high = Math.max(high, row[row.length - 1]);
    }

    let reqMinElements = Math.floor(rows * col / 2); // Calculate the required minimum number of elements

    // Perform binary search to find the median
    while (low <= high) {
        let mid = Math.floor((high + low) / 2); // Calculate the middle value

        let countOfSmall = countOfSmaller(matrix, mid); // Count the number of elements smaller than or equal to the middle value

        if (countOfSmall <= reqMinElements) {
            low = mid + 1; // If the count is less than or equal to the required minimum, move the low pointer to the right
        } else {
            high = mid - 1; // If the count is greater than the required minimum, move the high pointer to the left
        }
    }

    return low; // Return the low value as the median
}

function countOfSmaller(matrix, num) {
    let count = 0;
    for (row of matrix) {
        count += findUpperBound(row, num); // Count the number of elements smaller than or equal to the given number in each row
    }

    return count; // Return the total count
}

function findUpperBound(arr, num) {
    let low = 0;
    let high = arr.length - 1;

    // Perform binary search to find the upper bound of the given number in the array
    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // Calculate the middle value

        if (arr[mid] <= num) {
            low = mid + 1; // If the middle value is less than or equal to the given number, move the low pointer to the right
        } else {
            high = mid - 1; // If the middle value is greater than the given number, move the high pointer to the left
        }
    }

    return low; // Return the low value as the upper bound
}

console.log(findMedian([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Test the function with a sample matrix