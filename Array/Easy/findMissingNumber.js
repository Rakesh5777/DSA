// solution1: sum approach, sum of given numbers and sub from total sum of n numbers to get answer

const findMissingNumber = (nums) => {
    let sum = (nums.length * (nums.length + 1)) / 2;
    for (let i = 0; i <= nums.length - 1; i++) {
        sum -= nums[i];
    }

    return sum;
}

// solution 2: XOR approach, XOR of unique number is 0 and 0 XOR of some number is the same number, so we have to XOR everything so that we get unique number

const findMissingNumberXOR = (nums) => {
    let XOR1 = 0;
    let XOR2 = 0;

    for (let i = 0; i <= nums.length - 1; i++) {
        XOR1 = XOR1 ^ i;
        XOR2 = XOR2 ^ nums[i];
    }

    XOR1 = XOR1 ^ nums.length; // this is to XOR all numbers from 0 to N (as in loop we are going till N - 1)

    return XOR1 ^ XOR2;
}

console.log(findMissingNumberXOR([0, 1, 3]));

// other ways: we can sort and check for missed index