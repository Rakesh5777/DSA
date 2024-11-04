function substrCount(s, k) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let length = k;
        let currentSubstring = s.substring(i, i + length);

        while (length <= s.length - i && isvalid(currentSubstring, k)) {
            count++;
            length++;
            currentSubstring = s.substring(i, i + length);
        }
    }
    return count;
}

function isvalid(s, k) {
    return new Set(s).size === k;
}

console.log(substrCount("ecbaddce", 3))
