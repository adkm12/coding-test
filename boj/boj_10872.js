const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

let start = 1;
for (let i = 1; i <= Number(input); i++) {
    start *= i;
}

console.log(start);
