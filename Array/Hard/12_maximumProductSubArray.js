// Problem Statement: find maximum product of sub array in give array
// there are total four observations
// one   :- if all numbers are positive, answer is multiplication of all elements in array 
// two   :- if there are even no of negative numbers, negative will cancel and multiplication of all elements will be the answer
// three :- if there are odd no of negative numbers, some how we have remove one negative number and check for multiplications
// -------- to folve thrid observation, we can collect maximum prefix and maximum suffix to find the maximum sum
// four  :- if there are zeros in the array 
// -------- to solve fourth observation, the movement we see zero in prefix or suffix just reset it 1

// 1 3 4 3 -1 1

// so if we calculate max from prefix side we will 1 * 3 * 4 * 3 
// but from suffix max will be 1 as, the movement we multiply -1 with 1 rest of all next multiplications will be negative only

// 1 -4 6 -2 9 -6

// so if we calculate max from prefix side we will 1 * -4 * 6 * -2 * 9
// but from suffix we will have -6 * 9 * -2 * 6 ---> only will here is stored in max as if i multiply with -4 we will have negative again


const maxProduct = function (nums) {
    if (nums.length === 0) return 0;

    let prefix = 1;
    let suffix = 1;
    let result = -Infinity; // this is important, cuz array might have negative numbers

    for (let i = 0; i < nums.length; i++) {

        if (prefix === 0) prefix = 1; // to reset zero product
        if (suffix === 0) suffix = 1; //to reset zero product

        prefix *= nums[i];
        suffix *= nums[nums.length - 1 - i];

        result = Math.max(result, Math.max(prefix, suffix)); // store the result
    }

    return result
};

console.log(maxProduct([-3, -4])) // 12;
console.log(maxProduct([1, 0, 2, 3])) // 6;