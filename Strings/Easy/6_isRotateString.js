function isRotateString(s, goal) {
    if (s.length !== goal.length) return false;

    // goal = cdeab => cdeab + cdeab = cde(abcde)ab ----> this solves the problem
    return (goal + goal).includes(s);
}



// it is just over engg solution, brute force O(n ^ 2)
var rotateStringOverEnggStupidSol = function (s, goal) {
    for (let i = 0; i <= s.length - 1; i++) {
        if (goal === rotate(s, i)) return true;
    }
    return false;
};

function rotate(s, num) {
    let firstPart = reverse(s.substring(0, num));
    let secondPart = reverse(s.substring(num, s.length));
    let final = reverse(firstPart + secondPart)
    return final;
}

function reverse(s) {
    let stringArray = s.split("");
    let mid = Math.floor(stringArray.length / 2);
    let stringSize = stringArray.length - 1;

    for (let i = 0; i <= mid - 1; i++) {
        swap(i, stringSize - i, stringArray);
    }
    return stringArray.join("");
}

function swap(firstIndex, secondIndex, string) {
    let temp = string[firstIndex];
    string[firstIndex] = string[secondIndex];
    string[secondIndex] = temp;
}

console.log(isRotateString("abcde", "cdeab"))