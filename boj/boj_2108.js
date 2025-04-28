const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const n = input.shift();

function 산술평균(input) {
    if (input.length === 1) return input[0];
    const result = Math.round(input.reduce((acc, cur) => (acc += cur), 0) / n);
    if (result === -0) return 0;
    return result;
}

function 중앙값(input) {
    if (input.length === 1) return input[0];
    input.sort((a, b) => a - b);
    return input[Math.trunc(input.length / 2)];
}

function 최빈값(input) {
    if (input.length === 1) return input[0];
    const map = new Map();
    input.forEach((num) => map.set(num, map.has(num) ? map.get(num) + 1 : 1));
    if (map.size === 1) return map.keys().next().value;
    const arr = Array.from(map.entries())
        .map(([key, value]) => [value, key])
        .sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            }
            return b[0] - a[0];
        });
    if (arr[0][0] === arr[1][0]) {
        return arr[1][1];
    } else return arr[0][1];
}

function 범위(input) {
    if (input.length === 1) return 0;
    input.sort((a, b) => a - b);
    return input[input.length - 1] - input[0];
}

console.log(산술평균(input));
console.log(중앙값(input));
console.log(최빈값(input));
console.log(범위(input));
