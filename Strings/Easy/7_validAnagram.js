// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

var isAnagram = function (s, t) {
    // Generate frequency maps for both strings
    let mapS = getMap(s);
    let mapT = getMap(t);

    // Check if both maps are identical in terms of keys and values
    return areObjectsEqual(mapS, mapT);
};

function getMap(s) {
    // Initialize an empty object to store character frequencies
    let map = {};

    // Iterate through each character in the string
    for (let i = 0; i <= s.length - 1; i++) {
        // If the character is already in the map, increment its count
        // Otherwise, initialize it to 1
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    }

    // Return the map with frequency counts of each character
    return map;
}

function areObjectsEqual(obj1, obj2) {
    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // If the number of keys is different, the objects are not equal
    if (keys1.length != keys2.length) return false;

    // Check if each key in obj1 has the same value in obj2
    for (let key of keys1) {
        if (obj1[key] != obj2[key]) return false; // Values don't match
    }

    // If all keys and values match, the objects are equal
    return true;
}

console.log(isAnagram("adhya", "yaadh"))