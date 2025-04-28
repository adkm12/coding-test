const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const map = new Map();

input.forEach((word) => {
    if (word.length >= M) {
        map.set(word, map.has(word) ? map.get(word) + 1 : 1);
    }
});

[...map.entries()]
    .sort((a, b) => {
        if (b[1] === a[1]) {
            if (b[0].length === a[0].length) {
                return a[0].localeCompare(b[0]);
            }
            return b[0].length - a[0].length;
        }
        return b[1] - a[1];
    })
    .forEach((word) => console.log(word[0]));
