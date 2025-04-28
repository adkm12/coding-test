const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((i) => i.split(" "));

input.shift();

const set = new Set();
set.add("ChongChong");

for (const meet of input) {
    if (set.has(meet[0]) || set.has(meet[1])) {
        set.add(meet[0]);
        set.add(meet[1]);
    }
}

console.log(set.size);
