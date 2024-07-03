// Problem Statement: Given two numbers N and M, find the Nth root of M. The nth root of a number M is defined as a number X when raised to the power N equals M. If the 'nth root is not an integer, return -1.
// intution is simple, calculate mid, if Math.pow(mid, n) is < m, then we just need to go towards right, as all left elements will obviously satisfy Math.pow(mid, n) < m

function NthRoot(n, m) {
    let low = 1;
    let high = m;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);

        if (Math.pow(mid, n) === m) return mid;

        if (Math.pow(mid, n) < m) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

console.log(NthRoot(2, 9)) // 3