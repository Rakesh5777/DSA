function leaders(arr, n) {
    let maximum = arr[n - 1];
    let result = [arr[n - 1]];

    for (let i = n - 2; i > 0; i--) {
        if (arr[i] < arr[i - 1]) {
            if (arr[i - 1] > maximum) {
                maximum = arr[i - 1];
                result.unshift(maximum);
            }
        }
    }

    return result;
}

console.log(leaders([16, 17, 4, 3, 5, 2], 6))