function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10))

// this is best way of doing this !
function bestFibonacci(num) {
    if (num <= 1) return num;
    let last = 1; secondLast = 0; current = 0; i = 0;
    for (i = 2; i <= num; i++) {
        current = last + secondLast;
        secondLast = last;
        last = current;
    }
    return current;
}

console.log(bestFibonacci(10))