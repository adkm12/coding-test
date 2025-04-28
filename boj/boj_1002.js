const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

const T = Number(input.shift());

const log = (a) => console.log(a);

for (let i = 0; i < T; i++) {
    const [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map(Number);
    const length = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    if (x1 === x2 && y1 === y2) {
        if (r1 === r2) {
            log(-1);
        } else {
            log(0);
        }
    } else {
        if (length > Math.abs(r1 - r2) && length < r1 + r2) {
            log(2);
        } else if (length + r1 === r2 || length + r2 === r1 || length === r1 + r2) {
            log(1);
        } else {
            // 내접 외접
            log(0);
        }
    }
}
