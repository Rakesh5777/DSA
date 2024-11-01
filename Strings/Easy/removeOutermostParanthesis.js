// Intution is simple i just need to count "(", if count is greater than 0 then start collecting result and the movement count is 0 dont collect result

function removeOuterParentheses(s) {
    if (!s) return "";
    let result = "";
    let count = 0;

    s.split("").forEach(string => {
        if (string === "(") {
            if (count != 0) result += string; // i have added here as count will not zero when counting for first (
            count++;
        } else {
            count--;
            if (count != 0) result += string;
        }

    })

    return result;
}

console.log(removeOuterParentheses("(()())"));


var removeOuterParenthesesMORESPACE = function (s) {
    const decomposed = getDecomposed(s);
    return decomposed.map(parentheses => parentheses.substring(1, parentheses.length - 1)).join("");
};

function getDecomposed(s) {
    if (!s) return "";
    let decomposed = [];
    let count = 0;
    let curr = "";
    s.split("").forEach(string => {
        if (string === "(") {
            count++;
        } else if (string === ")") {
            count--;
        }

        curr += string;

        if (count === 0) {
            decomposed.push(curr);
            curr = "";
        }

    })

    return decomposed;
}