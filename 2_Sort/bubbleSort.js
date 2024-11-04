// push the maximum number to left with ADJACENT SWAPS 
// we can optimize the flow by breaking loop if there are no swaps, which means array is sorted
// make sure while doing adjacent swaps, we have to take care of last element because [1,3,2], i should only check till 3 not till 2

function bubbleSort(numsArray) {
    for (let i = numsArray.length - 1; i >= 1; i--) {
        let didSwap = false;
        for (let j = 0; j <= i - 1; j++) {// i - 1 is required because [1,3,2], i should only check till 3 not till 2
            if (numsArray[j] > numsArray[j + 1]) {
                swap(numsArray, j, j + 1);
                didSwap = true;
            }
        }
        if (!didSwap) {
            break; // this didSwap is to optimise best case, if no swaps are done, which means array is sorted and no need to do further checks and swaps
        }
    }
    return numsArray;
}

function swap(array, first, second) {
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

console.log(bubbleSort([1, 8, 2, 2, 2, 2]));