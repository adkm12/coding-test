const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");
const n = input.shift();
console.log(
    input
        .map(Number)
        .sort((a, b) => a - b)
        .join("\n")
);
