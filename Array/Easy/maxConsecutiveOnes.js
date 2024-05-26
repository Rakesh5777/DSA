// solution 1 : sum the ones till 0, and store the sum in max 

const maxConsecutiveOnes = (nums) => {
    let max = 0;
    let currentSum = 0;

    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] === 1) {
            currentSum += 1;
        } else {
            max = currentSum > max ? currentSum : max;
            currentSum = 0;
        }
    }

    return currentSum > max ? currentSum : max;
}

// solution 2 : convert array to string and split with 0 and now have loop through array and find the max

const maxConsecutiveOnesString = (nums) => {
    const given = nums.join('');
    const arr = given.split('0');

    let max = 0;
    for (i in arr) {
        let length = arr[i].length;
        max = length > max ? length : max;
    }

    return max;
}

console.log(maxConsecutiveOnesString([0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]))