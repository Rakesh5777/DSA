// Problem Statement: You have been given a non-empty grid ‘mat’ with 'n' rows and 'm' columns consisting of only 0s and 1s. All the rows are sorted in ascending order.
// Your task is to find the index of the row with the maximum number of ones.
// Note: If two rows have the same number of ones, consider the one with a smaller index. If there's no row with at least 1 zero, return -1.

// Intution is simple, as it is 2D array one loop we have to do, inside each row to find no of ones, as they have mentioned it is sorted we can use binary search to find no of ones.

function rowWithMax1s(arr) {
    let highestOne = -Infinity;
    let rowIndex = -1;

    for (let i = 0; i <= arr.length - 1; i++) {

        let onesCount = getNoOfOnes(arr[i]);
        if (onesCount === 0) continue
        if (highestOne === onesCount) {
            rowIndex = Math.min(i, rowIndex);
        } else if (onesCount > highestOne) {
            highestOne = onesCount;
            rowIndex = i;
        }

    }

    return rowIndex
}

function getNoOfOnes(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === 1) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    let firstOnePos = low;

    return arr.length - low;

}
