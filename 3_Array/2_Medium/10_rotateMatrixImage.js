// Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.
// intution for optimal is simple transpose the matrix and reverse each row for the answer
const rotate = (matrix) => {
    transposeMatrix(matrix);
    for (let row of matrix) {
        reverse(row);
    }
    return matrix;
}

// simple reverse logic with two pointer
const reverse = (nums) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        swapNums(nums, left, right);
        left++;
        right--;
    }
}

const swapNums = (nums, firstIndex, secondIndex) => {
    const temp = nums[firstIndex];
    nums[firstIndex] = nums[secondIndex];
    nums[secondIndex] = temp;
}

// transpose is ntg but changing rows to columns 
//  1 2 3   1 4 7
//  4 5 6 = 2 5 8
//  7 8 9   3 6 9
// observation is diagonals are same and all other elements are swapping 
// if we clearly notice we just need to swap
// 1 (2) (3)
// 4  5  (6)
// 7  8   9
// 2, 3, 6 with opposite elements leaving diagonals
// (0,1) is swapped with (1,0) and continue
const transposeMatrix = (matrix) => {
    let m = matrix[0].length;
    let n = matrix.length;

    for (let i = 0; i <= n - 2; i++) { // as above explantion, we can only check rows till n - 1
        for (let j = i + 1; j <= m - 1; j++) { // start each row after i, as i is diagonal and they wont change
            swapMatrix(matrix, i, j);
        }
    }
}

const swapMatrix = (matrix, firstIndex, secondIndex) => {
    const temp = matrix[firstIndex][secondIndex];
    matrix[firstIndex][secondIndex] = matrix[secondIndex][firstIndex];
    matrix[secondIndex][firstIndex] = temp;
}


// solution --------------- 2 --------------------
// intution for brute is simple have a result matrix and store correct answer
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]] loop from reverse of input and push in all three arrays with j index 
// [7, 8 , 9] this will go to [[7],[8],[9]]
// [4, 5 , 6] this will go to [[7,4],[8,5],[9,6]] and this flow continues to form output
// Output: [[7,4,1],[8,5,2],[9,6,3]]

const rotateBetter = function (matrix) {
    let result = [];
    let m = matrix[0].length;
    let n = matrix.length;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            if (!result?.[j]) result[j] = [];
            result[j].push(matrix[i][j]);
        }
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = result[i][j];
        }
    }
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))