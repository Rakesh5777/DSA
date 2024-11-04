// Problem Statement: You are given a positive integer n. Your task is to find and return its square root. If ‘n’ is not a perfect square, then return the floor value of 'sqrt(n)'.
// intution is simple, calculate mid, if mid * mid is < x, then we just need to go towards right, as all left elements will obviously satisfy mid * mid < x


function floorSqrt(x) {
    let low = 1;
    let high = x;
    let ans = 0;

    while (low <= high) {

        let mid = Math.floor((high + low) / 2);

        if (mid * mid === x) return mid // little optimization

        if (mid * mid < x) {
            ans = mid; // to store answer
            low = mid + 1;
        } else {
            high = mid - 1;
        }

    }

    return ans // return answer
}

console.log(floorSqrt(5)) // 2
console.log(floorSqrt(16)) // 4