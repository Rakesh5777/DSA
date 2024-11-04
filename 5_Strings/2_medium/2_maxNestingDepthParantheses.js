var maxDepth = function (s) {
    let count = 0;
    let max = 0;

    for (let i = 0; i <= s.length - 1; i++) {
        let string = s[i];
        if (string === "(") {
            count++;
            max = Math.max(max, count);
        } else if (string === ")") {
            count--;
        }
    }

    return max;
};

console.log(maxDepth("()(())((()()))")) //3