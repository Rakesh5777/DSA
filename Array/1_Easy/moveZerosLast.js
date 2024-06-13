//to track zero and non zero with two pointers and swap

const moveZeroes = (nums) => {
    let i = 0;
    let j = -1;

    for (let k = 0; k <= nums.length - 1; k++) {
        if (nums[k] === 0) {
            j = k; // to find first zero index 
            break;
        }
    }

    if (j === -1) return nums // no zero no need to move

    i = j + 1; // assume next to j is non zero

    while (i < nums.length) {
        if (nums[i] != 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
        i++;
    }

    return nums;
};


console.log(moveZeroes([1, 0, 20, 0, 390, 4, 0, 6, 0]));


