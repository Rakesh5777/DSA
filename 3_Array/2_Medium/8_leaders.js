// Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.
// intution is simple, just loop from back and the movement we get something bigger than currentMax, push it to result

function leaders(arr, n) {
    let maximum = arr[n - 1]; // start with last element as current max
    let result = [arr[n - 1]]; // last element is always leader as there is no element after it

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] >= maximum) { // if current element is smaller than maximum
            maximum = arr[i]; // replace with maximum
            result.unshift(maximum); // and keep it in result
        }
    }

    return result;
}

console.log(leaders([16, 17, 4, 3, 5, 2], 6)) // 17 5 2