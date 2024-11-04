var myAtoi = function (s) {
    // Step 1: Trim leading and trailing whitespace from the input string.
    s = s.trim();

    // If the string is empty after trimming, return 0 as there's no valid number.
    if (!s) return 0;

    // Step 2: Initialize `sign` to track positive or negative numbers and `i` as the index pointer.
    let sign = 1;
    let i = 0;

    // Check if the first character is a sign ('+' or '-').
    // If it is '-', set `sign` to -1; if it's '+', keep `sign` as 1.
    // Increment `i` to skip the sign character for the rest of the parsing.
    if (s[0] === '-' || s[0] === '+') {
        sign = s[0] === '-' ? -1 : 1;
        i++;
    }

    // Step 3: Initialize `num` to build the resulting integer.
    // Define `max` and `min` to store the 32-bit signed integer range.
    let num = 0;
    const max = 2 ** 31 - 1; // Maximum positive value for 32-bit signed integer.
    const min = -(2 ** 31);  // Minimum negative value for 32-bit signed integer.

    // Loop through each character in the string as long as it's a numeric digit.
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        // Convert the character to a number by subtracting the ASCII value of '0'.
        // Multiply `num` by 10 and add the new digit to shift `num` left and append the new digit.
        num = num * 10 + (s[i] - '0');
        i++;
    }

    // Step 4: Apply the sign to `num`.
    num *= sign;

    // Step 5: Clamp `num` within the 32-bit signed integer range.
    if (num < min) return min;  // Return `min` if `num` is below the allowed range.
    if (num > max) return max;  // Return `max` if `num` is above the allowed range.

    // Return the final integer value after parsing and clamping.
    return num;
};

console.log(myAtoi("-91283472332")) // -2147483648



var myAtoiBrute = function (s) {
    s = s.trim();
    let currentSign = "";

    if (s[0] === "-") {
        currentSign = "-";
        s = s.substring(1, s.length);
    } else if (s[0] === "+") {
        s = s.substring(1, s.length);
    }

    s = removeZeros(s);
    s = removeLetters(s);

    const range = 2 ** 31;
    const result = currentSign === "-" ? +s * -1 : +s;

    if (result > 0) {
        return result > range - 1 ? range - 1 : result;
    } else {
        return range * -1 > result ? range * -1 : result;
    }


};

function checkForSign(s) {
    return s[0] === "-" ? "-" : "";
}

function removeZeros(s) {
    let pointer = 0;
    while (s[pointer] === "0") pointer++;
    return s.substring(pointer, s.length);
}

function removeLetters(s) {
    let pointer = 0;
    while (!!(+s[pointer]) || s[pointer] === "0") pointer++;
    return s.substring(0, pointer);
}