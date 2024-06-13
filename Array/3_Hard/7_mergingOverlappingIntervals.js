// Problem Statement: Given an array of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals.
// Intution is first sort the intervals, so that it will be easy to club the elements
// for example take [1, 5] [2, 8]
// now to know it is overlapping i just need to check left[1] >= right[0] if this condition pass then it is overlapping


function merge(intervals) {

    intervals.sort((a, b) => a[0] - b[0]); // sort it

    let result = [intervals[0]]; // assume this is result and start loop from next index

    for (let i = 1; i < intervals.length; i++) { // as we have assumed 1 element as result, we will update
        let last = result[result.length - 1];  // get last result
        let current = intervals[i];

        if (last[1] >= current[0]) { // if current is overlapping the result 
            last[1] = Math.max(last[1], current[1]); // merge the current in result
        } else {
            result.push(current); // else push the current as new result
        }
    }

    return result;
}


// this is two pointer way
function mergeTwoPointer(intervals) {

    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]); // i missed this very badly

    let result = [];

    let left = 0;
    let right = 1;

    while (right <= intervals.length) { // check till right is valid, checking one step more becase, right may go one step ahead in the while loop below
        let start = intervals[left][0];
        let end = intervals[left][1];

        while (right < intervals.length && end >= intervals[right][0]) { // if it is overlapping updated end and move on
            end = Math.max(end, intervals[right][1]);
            right++;
        }

        if (right <= intervals.length) { // check if right is valid, and if right is valid
            result.push([start, end]); // push the result
            left = right; // and continue the process
            right = left + 1;
        }
    }

    return result;
};


console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])) // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
console.log(merge([[1, 4], [0, 1]])) // [ [ 0, 4 ] ]