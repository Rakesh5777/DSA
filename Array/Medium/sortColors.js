// dutch national flag algorithm
// 1 to LOW - 1 ================ ZERO's (sorted)
// LOW to MID - 1 ============== ONE's  (sorted)
// MID to HIGH is given array           (unsorted)
// HIGH + 1 to length - 1 ======= TWO's (sorted)

function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    // we just need to loop between mid and high
    while (mid <= high) {

        // if mid is 0 then we just have to move mid to low and make mid++ and low++ to align with algo
        if (nums[mid] === 0) {
            swap(nums, low, mid);
            low++;
            mid++;
            continue;
        }

        // if mid is 1 then it is in correct place right we just need to move mid++
        if (nums[mid] === 1) {
            mid++;
            continue;
        }

        // if mid is 2 keep it at high and move high--
        if (nums[mid] === 2) {
            swap(nums, mid, high);
            high--;
            continue;
        }

    }

    return nums;
}

function swap(nums, firstIndex, secondIndex) {
    [nums[firstIndex], nums[secondIndex]] = [nums[secondIndex], nums[firstIndex]];
}

// this is simple way, we just need to count zero's and one's and rest of all elements should be two

function sortColorSimple(nums) {
    let zeroCount = 0;
    let oneCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        } else if (nums[i] === 1) {
            oneCount++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (zeroCount > 0) {
            nums[i] = 0;
            zeroCount--;
        } else if (oneCount > 0) {
            nums[i] = 1;
            oneCount--;
        } else {
            nums[i] = 2;
        }
    }

    return nums;
}


// console.log(sortColors([0, 1, 2, 0]))
console.log(sortColors([0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 2, 1, 2, 1, 0, 2, 1, 2]))
