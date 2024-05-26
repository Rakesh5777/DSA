const singleNumber = function (nums) {
    let XOR = 0;
    for (let i = 0; i <= nums.length - 1; i++) {
        XOR = XOR ^ nums[i]; // XOR of same number is zero and zero of some number is the same number 
    }

    return XOR;
};