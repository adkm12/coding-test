const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
    const [x, y] = input.shift().split(" ").map(Number);
    main(x, y);
}

function fact(n) {
    let result = BigInt(1);
    for (let i = BigInt(1); i <= n; i++) result *= i;
    return result;
}

function main(x, y) {
    console.log((fact(y) / (fact(y - x) * fact(x))).toString().replace("n", ""));
}
