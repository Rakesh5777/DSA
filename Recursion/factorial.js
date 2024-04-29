function factorail(num) {
    if (num === 1) return num;
    return num * factorail(num - 1);
}

console.log(factorail(4))