// Problem Statement: You are given a read-only array of N integers with values also in the range [1, N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.
// this is simple maths problem find sum of n naturals numbers and sum of given numbers 
// subtract sum of n natural nums and sum of give nums will give us x - y where x = missing number, y = repeated number
// assume [1,2,2] is given 
// ( 1 + 2 + 3 ) - ( 1 + 2 + 2 ) => after all cancellations we will left with 3 - 2, so 3 is missing and 2 repeated number
// similarly calculate for squares also we will get another equation, now its just simple maths, just solve equations and return answer

function findTwoElement(arr, n) {

    let s = (n * (n + 1)) / 2; // sum of n natural numbers 
    let s2n = (n * (n + 1) * (2 * n + 1)) / 6; // sum of squares of n natural numbers 

    let givenArrSum = 0;
    let givenArrSqSum = 0;

    for (let i = 0; i < n; i++) { // loop to get givenArrSum & givenArrSqSum
        givenArrSum += arr[i];
        givenArrSqSum += Math.pow(arr[i], 2);
    }

    let val1 = s - givenArrSum; // this will result in val1 = x - y;
    let val2 = s2n - givenArrSqSum; // this will result in val2 = (x + y)(x - y);

    let x = (val2 / val1 + val1) / 2; // missing number
    let y = x - val1; // repeating number

    return [y, x];
}

console.log(findTwoElement([1, 2, 2, 4], 4)) // 2, 3