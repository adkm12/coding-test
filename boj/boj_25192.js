const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

const chatCount = input.shift();

const setArr = [];
let enterCount = 0;
for (const line of input) {
    if (line === "ENTER") {
        const set = new Set();
        setArr.push(set);
        enterCount++;
    } else {
        setArr[enterCount - 1].add(line);
    }
}

let result = 0;

for (const set of setArr) {
    result += set.size;
}

console.log(result);
