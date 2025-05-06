const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());

const arr = input.map((line) => {
    return line.split(" ").map(Number);
});

arr.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
});

let count = 0;
let lastTime = 0;

for (const meeting of arr) {
    if (meeting[0] >= lastTime) {
        count++;
        lastTime = meeting[1];
    }
}

console.log(count);
