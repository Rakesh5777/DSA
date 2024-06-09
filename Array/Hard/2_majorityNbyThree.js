// Problem Statement: Given an array of N integers. Find the elements that appear more than N/3 times in the array. If no such element exists, return an empty vector.
// intution is use moore's voting algo, cancel the different elemets 
// have two counts and two elements, the movement count goes zero replace that with a new element and continue the process
// after finding two elements, manually check if the result is acutally a majority element or not and then return the result

// ---------------- other solution is very simple, simply store the count the in hashmap and then return the result based on majority


// IMPORTANT NOTE :- for N/3 majority we will have only 2 answer for sure, cuz 34% + 34% we cannot fit another element coz other element will have only 32% chance
// Time Complexity is O(2n) and space is O(1);

function majorityElement(nums) {
    let count1 = 0;
    let leader1 = 0;
    let count2 = 0;
    let leader2 = 0;


    for (let num of nums) {

        // where ever count is 0, reset count and take new leader
        if (count1 === 0 && num != leader2) { // track any element which is other than leader2  
            count1 = 1;
            leader1 = num;
        }
        else if (count2 === 0 && num != leader1) { // track any element which is other than leader1
            count2 = 1;
            leader2 = num;
        }
        else if (leader1 === num) count1++
        else if (leader2 === num) count2++
        else {
            count1--;
            count2--;
        }

    }

    count1 = 0;
    count2 = 0;
    let result = [];
    const majority = Math.floor(nums.length / 3);

    //checking manually for the actual count
    for (let num of nums) {
        if (leader1 === num) count1++;
        if (leader2 === num) count2++;
    }

    if (count1 > majority) {
        result.push(leader1);
    }

    if (count2 > majority && leader2 != leader1) {
        result.push(leader2);
    }

    return result;
};

console.log(majorityElement([1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1]));