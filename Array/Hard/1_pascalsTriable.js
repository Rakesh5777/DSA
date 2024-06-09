//Problem Statement: Given the number of rows n. Print the first n rows of Pascal’s triangle.
// (row - 1) c (col - 1)
// (row - 1) c (col - 1)
// (row - 1) c (col - 1)
// (row - 1) c (col - 1)
// intution is to have a function which will take rowNum as arg and return row of pascal triangle, and then loop in generate function and get all rows
// IMPORTANT NOTE :- given row and given col, the element in pascal triangle is (row - 1) c (col - 1)
// n C r = n! / r! * (n - r)!

var generate = function (numRows) {
    const result = [];
    for (let i = 1; i <= numRows; i++) {
        result.push(getPascalRow(i))
    }
    return result;
};

// the observation for generating 4th row ==> 1 3 3 1
// IMPORTANT NOTE :- given row and given col, the element in pascal triangle is (row - 1) c (col - 1)
// row = 4 , col = 2
// 3 C 1 is the answer, which is 3! / (1! * 2!) = (3 * 2!) / (1! * 2!) => 3 / 1! 
// row = 4 , col = 3
// 3 C 2 is the answer , which is 3! / (2! * 1!) = 3 * 2 * 1! / 2 * 1 * 1! => 3 * 2 / 1 * 2

// so every iteration we are just starting result with 1 and we are creating numerator with row - i and creating denominator with i 

function getPascalRow(row) {
    const result = [];

    let currentValue = 1; // this is to store previous value

    for (let i = 0; i < row; i++) { // first element and last element are always 1, so just push them
        if (i == 0 || i == row) {
            result.push(1);
        } else {
            let numerator = row - i;
            let denominator = i;
            currentValue = currentValue * numerator / denominator;
            result.push(currentValue);
        }
    }

    return result;
}

console.log(generate(4));