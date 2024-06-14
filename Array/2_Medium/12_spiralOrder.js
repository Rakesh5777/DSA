// Problem Statement: Given a Matrix, print the given matrix in spiral order.
// intution is simple, there is no better way or optimal way, just loop throw all elements in spiral way with four steps
// implementation is very stright farword just four steps
// 1 2 3
// 4 5 6
// 7 8 9
// loop through left to first to print 1, 2, 3 and then make top one step down
// loop through top to bottom to print 6, 9 and then make right one step back
// and continue the flow


var spiralOrder = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let left = 0;
    let right = cols - 1;
    let top = 0;
    let bottom = rows - 1;

    let result = [];

    while (top <= bottom && left <= right) { // repeat all the below steps till we have more space between postions to print

        // LEFT to RIGHT at TOP row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++; // moving top one step down

        // TOP to BOTTOM at RIGHT column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--; // moving right one step back

        if (top <= bottom) { // if top is greater than bottom, no point of printing right to left
            // RIGHT to LEFT at BOTTOM row
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--; // moving bottom one step top
        }

        if (left <= right) { // if right is less then left we dont need to print from bottom to top
            // BOTTOM to TOP at LEFT colum
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++; // moving left one step ahead;
        }
    }

    return result;

};