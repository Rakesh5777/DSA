var isIsomorphic = function (s, t) {
    // If lengths are different, the strings cannot be isomorphic
    if (s.length !== t.length) return false;

    let maps = {}; // Maps characters from s to t
    let mapt = {}; // Maps characters from t to s

    // Iterate through each character in the strings
    for (let i = 0; i < s.length; i++) { // Use i < s.length for clarity
        const first = s[i];   // Character from string s
        const second = t[i];  // Character from string t

        // Map character from s to t
        if (!maps[first]) {
            maps[first] = second; // If not mapped yet, create the mapping
        } else if (maps[first] !== second) {
            // If already mapped but does not match, they are not isomorphic
            return false;
        }

        // Map character from t to s
        if (!mapt[second]) {
            mapt[second] = first; // If not mapped yet, create the mapping
        } else if (mapt[second] !== first) {
            // If already mapped but does not match, they are not isomorphic
            return false;
        }
    }

    // If all characters can be mapped correctly, they are isomorphic
    return true;
};

console.log(isIsomorphic("egg", "add"))