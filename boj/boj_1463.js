const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

function solutaion(input) {
    let N = Number(input);
    if (N === 1) {
        console.log(0);
        return;
    }
    const dp = Array(N + 1).fill(0);
    dp[1] = 0;

    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.min(i % 3 === 0 ? dp[i / 3] + 1 : Infinity, i % 2 === 0 ? dp[i / 2] + 1 : Infinity, dp[i - 1] + 1);
    }

    console.log(dp[N]);
}

solutaion(input);
