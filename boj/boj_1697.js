const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./boj/input.txt")
    .toString()
    .trim()
    .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const visited = Array(100001).fill(false);

const bfs = () => {
    const q = [[N, 0]];

    while (q.length !== 0) {
        const [loc, count] = q.shift();
        if (visited[loc]) continue;
        if (loc === K) {
            console.log(count);
            break;
        }
        visited[loc] = true;
        if (loc * 2 <= 100000) q.push([loc * 2, count + 1]);
        if (loc + 1 <= 100000) q.push([loc + 1, count + 1]);
        if (loc - 1 >= 0) q.push([loc - 1, count + 1]);
    }
};

if (N >= K) {
    console.log(N - K);
} else {
    bfs();
}
