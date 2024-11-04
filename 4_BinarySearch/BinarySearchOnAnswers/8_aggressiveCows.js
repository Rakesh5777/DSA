
// Problem Statement: You are given an array 'arr' of size 'n' which denotes the position of stalls. You are also given an integer 'k' which denotes the number of aggressive cows. You are given the task of assigning stalls to 'k' cows such that the minimum distance between any two of them is the maximum possible.Find the maximum possible minimum distance.
// Intution is simple, we will sort the stalls, and check if cows can be placed or not, based on this condition we will apply BS

const aggressiveCows = (stalls, cows) => {
    // sorting the stalls to get minimum distance between consective stalls
    stalls.sort((a, b) => a - b);

    let low = 1;
    let high = stalls[stalls.length - 1] - stalls[0];

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);

        if (checkCowPlacementForMinDist(stalls, cows, mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return high;
}

// this is to check if cows can be placed or not
const checkCowPlacementForMinDist = (stalls, cows, distance) => {
    let last = 0; // every time cow can be placed at first
    let cowsPlace = 1; // as first cow is already placed

    for (let i = 1; i < stalls.length; i++) {
        if (stalls[i] - stalls[last] >= distance) { // checking if current distance is greater than min distance
            cowsPlace++; // if current distance is more, cow can be placed
            last = i;
        }

        if (cowsPlace === cows) return true; // at any point if cows placed is equal to cows count, cows can be placed
    }
    return false; // else we will return false
}

const stalls = [0, 3, 4, 7, 10, 9];
const k = 4;
const ans = aggressiveCows(stalls, k);
console.log("The maximum possible minimum distance is:", ans);

