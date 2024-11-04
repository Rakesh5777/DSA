var intToRoman = function (num) {
    let map = {
        1: ["I", "V", "X"],
        10: ["X", "L", "C"],
        100: ["C", "D", "M"],
        1000: ["M", "", ""]
        // You can add more groups here as needed
    };
    let total = '';

    let current = 1;

    for (let i = 0; num > 0; i++) {
        const digit = num % 10; // Get the last digit
        const roman = getRoman(digit, map[current]);
        total = roman + total;
        num = Math.floor(num / 10); // Remove the last digit
        current *= 10; // Move to the next group
    }

    return total;
};

function getRoman(number, group) {
    const first = group[0];
    const second = group[1];
    const third = group[2];

    if (number <= 3) {
        return first.repeat(number);
    } else if (number === 4) {
        return first + second;
    } else if (number === 5) {
        return second;
    } else if (number <= 8) {
        return second + first.repeat(number - 5);
    } else if (number === 9) {
        return first + third;
    }
}

// Example usage
console.log(intToRoman(3749)); // MMMDCCXLIX