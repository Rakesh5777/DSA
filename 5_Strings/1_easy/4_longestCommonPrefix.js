var longestCommonPrefix = function (strs) {
    let result = '';

    let check = strs[0];

    for (let i = 0; i <= check.length - 1; i++) {
        if (strs.every(str => str[i] === check[i])) {
            result += check[i];
        } else {
            return result;
        }
    }

    return result;
};

console.log(longestCommonPrefix(['rakesh', 'rakul', 'ramesh']));