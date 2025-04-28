const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
    const [x1, y1, x2, y2] = input.shift().split(" ").map(Number);
    const n = input.shift();
    let result = 0;
    for (let j = 0; j < n; j++) {
        const [x3, y3, r] = input.shift().split(" ").map(Number);
        let sLen = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2);
        let dLen = Math.sqrt((x2 - x3) ** 2 + (y2 - y3) ** 2);

        if (sLen < r && dLen < r) {
            continue;
        } else if ((sLen < r && dLen > r) || (sLen > r && dLen < r)) {
            result++;
        } else {
            continue;
        }
    }
    console.log(result);
}
