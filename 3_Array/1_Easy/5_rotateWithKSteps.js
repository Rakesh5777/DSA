const rotateOptimal = (nums, k) => {
    if (nums.length === 0 || nums.length === 1 || k === 0) return nums;
    let rotations = k > nums.length ? k % nums.length : k;
    if (rotations === nums.length) return nums;

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, rotations - 1);
    reverse(nums, rotations, nums.length - 1);

    return nums;
}

const reverse = (nums, start, end) => {
    const length = Math.floor((start + end) / 2);
    for (let i = start; i <= length; i++) {
        swap(nums, i, end);
        end--;
    }
}

function swap(numsArray, firstIndex, secondIndex) {
    let temp = numsArray[firstIndex];
    numsArray[firstIndex] = numsArray[secondIndex];
    numsArray[secondIndex] = temp;
}

//solution 1

const rotate1 = function (nums, k) {
    if (nums.length === 0 || nums.length === 1) return nums;
    let rotations = k > nums.length ? k % nums.length : k;
    if (rotations === nums.length) return nums;
    for (let i = 0; i < k; i++) {
        for (let j = nums.length - 1; j > 0; j--) {
            swap(nums, j, j - 1);
        }
    }
    return nums;
}

//solution 2

const rotate2 = function (nums, k) {
    if (nums.length === 0 || nums.length === 1) return nums;
    let rotations = k > nums.length ? k % nums.length : k;
    if (rotations === nums.length) return nums;

    const temp = [];
    for (let i = nums.length - rotations; i <= nums.length - 1; i++) {
        temp.push(nums[i]);
    }

    for (let i = nums.length - rotations - 1; i >= 0; i--) {
        nums[i + rotations] = nums[i];
    }

    for (let i = 0; i < rotations; i++) {
        nums[i] = temp[i];
    }

    return nums;
}

console.log(rotateOptimal([1, 2, 3, 4, 5, 6, 7], 3));