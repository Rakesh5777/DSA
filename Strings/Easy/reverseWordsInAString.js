function reverseWords(s) {
    let result = "";
    let word = "";
    for (let string of s) {
        if (string === " ") {
            if (word) {
                result = result ? word + " " + result : word;
                word = "";
            }
        } else {
            word += string;
        }
    }

    if (word) {
        result = result ? word + " " + result : word;
        word = "";
    }

    return result;
}

function reverseWordsOptimal(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWordsOptimal("the sky is blue"))