var longestPalindrome = function (s) {
    // Variable to store the longest palindromic substring found
    let result = '';

    // Loop through each character in the string to use as potential centers
    for (let i = 0; i < s.length; i++) {
        // First, consider odd-length palindromes with a single character center
        let left = i;
        let right = i;

        // Expand outwards from the center while the characters match and are within bounds
        while (s[left] === s[right] && left >= 0 && right < s.length) {
            // Update the result if the current palindrome is longer than the previous result
            result = right - left + 1 > result.length ? s.substring(left, right + 1) : result;
            left--;
            right++;
        }

        // Next, consider even-length palindromes with a two-character center
        left = i;
        right = i + 1;

        // Expand outwards from this center as well
        while (s[left] === s[right] && left >= 0 && right < s.length) {
            // Update the result if the current palindrome is longer than the previous result
            result = right - left + 1 > result.length ? s.substring(left, right + 1) : result;
            left--;
            right++;
        }
    }

    // Return the longest palindromic substring found
    return result;
};


console.log(longestPalindrome("atabcbaasdf"))