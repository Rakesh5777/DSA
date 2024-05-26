const linearSearch = (nums, number) => {
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] === number) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1, 23, 4, 5, 56, 6, 7, 7, 7], 70))