const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

const T = input.shift();

for (let i = 0; i < T; i++) {
    const [s, t] = input.shift().split(" ");
    const match = [...s.matchAll(t)].length;
    console.log(s.length - match * t.length + match);
}
