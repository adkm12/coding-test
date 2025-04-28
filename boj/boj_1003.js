const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

const T = Number(input.shift());
const memo = Array(41).fill(null);
memo[0] = "1 0";
memo[1] = "0 1";

for (let i = 2; i < memo.length; i++) {
    memo[i] = `${memo[i - 1].split(" ").map(Number)[0] + memo[i - 2].split(" ").map(Number)[0]} ${
        memo[i - 1].split(" ").map(Number)[1] + memo[i - 2].split(" ").map(Number)[1]
    }`;
}

for (let i = 0; i < T; i++) {
    const n = Number(input[i]);
    console.log(memo[n]);
}
