// using hash map 
// intution is to store the value and index in map, and every time we go to search, we have to check the map with expected 

function twoSum(nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        const expected = target - nums[i];

        if (expected in map) {
            return [map[expected], i];
        }

        map[nums[i]] = i;
    }
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 11, 0], 11)); // while i m at 6, we will check for 5 in map, and it will be there with index 4 