var beautySum = function (s) {
    let beauty = 0;

    for (let i = 0; i < s.length; i++) {
        // Frequency map for the current substring
        let freq = Array(26).fill(0);

        for (let j = i; j < s.length; j++) {
            // Update frequency of the current character
            freq[s[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;

            // Calculate the min and max frequency among characters with non-zero count
            let min = Infinity, max = -Infinity;
            for (const count of freq) {
                if (count > 0) {
                    min = Math.min(min, count);
                    max = Math.max(max, count);
                }
            }

            // Add the beauty (difference between max and min) to total beauty sum
            beauty += max - min;
        }
    }

    return beauty;
};


console.log(beautySum("aabcb")) // 5