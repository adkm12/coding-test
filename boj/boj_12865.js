const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const items = input.map((line) => line.split(" ")).map((e) => e.map(Number));
const dp = Array(K + 1).fill(0);

for (let i = 0; i < N; i++) {
    const [W, V] = items[i];

    for (let w = K; w >= W; w--) {
        dp[w] = Math.max(dp[w], dp[w - W] + V);
    }
}

console.log(Math.max(...dp));
