// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.
// intution is simple, instead of using extra space, use first row and first column of matrix to mark zeros 
// while doing so, there will be shortage of one position as (0,0) is common for both row and column, so we use extra one space
// 1    so use this extra space to mark for zero for FIRST COLUMN
// 1 0 1
// 1 1 1
// 1 0 1

const setZeroes = function (matrix) {

    let col0 = 1; // this is used to mark extra element space;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j === 0 && matrix[i][0] === 0) col0 = 0;
            else if (matrix[i][j] === 0) {
                matrix[0][j] = 0; // this is to mark column as zero;
                matrix[i][0] = 0; // this is to mark row as zero;
            }
        }
    }

    for (let i = matrix.length - 1; i >= 0; i--) { // we are coming from down because, if we come from first we may effect result for rest of the matrix
        for (let j = 1; j < matrix[i].length; j++) { // we check every element in the matrix, except for FIRST COLUMN
            if (matrix[i][j] != 0) { // this is to filter out zero elements
                if (matrix[0][j] === 0 || matrix[i][0] === 0) { // if zero is marked in first row or first column then update the specific field as zero
                    matrix[i][j] = 0;
                }
            }
        }
    }

    for (let i = matrix.length - 1; i >= 0; i--) {
        if (col0 === 0) {
            matrix[i][0] = 0; // if col0 is zero then first column will turn as zero;
        }
    }

    return matrix;
};

// console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
console.log(setZeroes([[1, 0, 3]]));