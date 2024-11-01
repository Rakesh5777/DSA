var largestOddNumber = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (+num[i] % 2 != 0) {
            return num.substring(0, i + 1); // return till i 
        }
    }
    return ""
};

var largestOddNumber1 = function (num) {
    while (num) {
        if (+num[num.length - 1] % 2 != 0) {
            return num;
        } else {
            num = num.substring(0, num.length - 1)
        }
    }
    return '';
};