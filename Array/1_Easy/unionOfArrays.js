// two pointer approach
// check minimum in the two array, and compare with previous element of the result, and if it is different, push the minimum element to result array


const union = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            if (arr1[i] != result[result.length - 1]) result.push(arr1[i]); // this is to check if number already exist or not
            i++;
        } else if (arr2[j] < arr1[i]) {
            if (arr2[j] != result[result.length - 1]) result.push(arr2[j]); // this is to check if number already exist or not
            j++;
        }
    }

    while (i < arr1.length) {
        if (arr1[i] != result[result.length - 1]) result.push(arr1[i]); // this is to check if number already exist or not
        i++;
    }

    while (j < arr2.length) {
        if (arr2[j] != result[result.length - 1]) result.push(arr2[j]); // this is to check if number already exist or not
        j++;
    }

    return result;
}

console.log(union([1, 2, 3, 4, 4], [3, 4, 5, 6, 7]));