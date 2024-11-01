var frequencySort = function (s) {
    // Generate frequency map and sort by frequency
    let mapArray = getMaps(s);

    // Create the sorted string by repeating each character based on frequency
    return mapArray.map(([char, count]) => char.repeat(count)).join('');
};

function getMaps(s) {
    let map = {};

    // Build the frequency map
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }

    // Convert the map to an array and sort by frequency in descending order
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
}

console.log(frequencySort("tree"));