// Problem Statement: A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.
// intution is some how we have to apply BS 
// so lets take a mid of rows, and find greatest, and check if that greatest is peak or not, if not peak, go towards greater side and trim down array
// In this way we will not go through all the elements in the array, and this algo works in O (col * log(row))

var findPeakGrid = (mat) => {
    let low = 0;
    let high = mat.length - 1;

    const findGreatest = function (arr) {
        let index = 0;

        for (let i = 1; i <= arr.length; i++) {
            if (arr[i] > arr[index]) {
                index = i;
            }
        }
        return index;
    }


    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let greatestPos = findGreatest(mat[mid]);

        const topElement = mat[mid - 1]?.[greatestPos] ?? -1;
        const bottomElement = mat[mid + 1]?.[greatestPos] ?? - 1;

        if (mat[mid][greatestPos] > topElement && greatestPos > bottomElement) {
            return [mid, greatestPos];
        }

        if (topElement > bottomElement) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}


console.log(findPeakGrid([[1, 2], [3, 4]])) // [1,1]


// this is not optimal and it traverse whole matrix in worst case 
var findPeakGridWorst = function (mat) {
    let row = 0;
    let col = 0;

    while (row < mat.length && col < mat[0].length) {
        let top = [row - 1, col];
        let down = [row + 1, col];
        let left = [row, col - 1];
        let right = [row, col + 1];
        const getvalue = (pos) => mat[pos[0]]?.[pos[1]] ?? -1;

        let curr = mat[row][col];

        if (curr > getvalue(right) && curr > getvalue(down) && curr > getvalue(top) && curr > getvalue(left)) {
            return [row, col]
        }

        let greatestPos = top;

        for (pos of [down, left, right]) {
            if (getvalue(pos) > getvalue(greatestPos)) {
                greatestPos = pos
            }
        }

        row = greatestPos[0];
        col = greatestPos[1];

    }

    return [row, col]
};