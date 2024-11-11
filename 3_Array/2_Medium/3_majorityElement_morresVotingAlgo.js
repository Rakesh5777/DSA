// this is Algorithm: Moore's Voting Algorithm 
// intution here if majority number exists then it wont cancel off while we are checking for count 

const majorityElement = (nums) => {
    let currentLeader = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            currentLeader = nums[i];
            count = 1;
        } else if (currentLeader === nums[i]) {
            count++;
        } else {
            count--;
        }
    }

    return currentLeader; // if array has majority element then if is the answer, if no we have check with another loop and return based on validation
}




const majorityElementHashing = function (nums) {
    let map = {};
    for (let num of nums) {
        map[num] = map[num] ? map[num] + 1 : 1;
    }

    for (let num in map) {
        let majority = Math.floor(nums.length / 2);
        if (map[num] > majority) return num;
    }
};


console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));