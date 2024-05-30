// this can be solved with Kadane's Algorithm
// with simple intution of carry sum in the array till it is positive, the movement it is less than zero reset sum
// but at every iteration just store the max sum

function maximumSubArray(nums) {
    let max = -Infinity; // this should be -Infinity because maximum sum can be negative also
    let sum = 0;

    for (let num of nums) {
        sum += num;

        if (sum > max) {
            max = sum;
        }

        if (sum < 0) {
            sum = 0
        }
    }

    return max;
}

console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))