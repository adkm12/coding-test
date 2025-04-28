const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ");

function solutaion(input) {
    let [start, end] = input.map(Number);
    const arr = Array(end + 1).fill(true);
    arr[0] = false;
    arr[1] = false;
    let next = 0;
    while (true) {
        next = arr.indexOf(true, next + 1);
        if (next === -1) break;
        for (let i = 2; next * i <= end; i++) {
            arr[next * i] = false;
        }
    }

    const result = [];
    arr.forEach((v, i) => {
        if (i >= start && v) result.push(i);
    });

    console.log(result.join("\n"));
}

solutaion(input);
