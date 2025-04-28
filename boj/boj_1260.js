const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

function solutaion(input) {
    const [N, M, V] = input.shift().split(" ").map(Number);
    const arr = Array(N + 1)
        .fill(0)
        .map(() => Array(N + 1).fill(0));
    const dfsResult = [];
    const bfsResult = [];
    const dfsVisited = Array(N + 1).fill(false);
    const bfsVisited = Array(N + 1).fill(false);
    const queue = [];

    for (let i = 0; i < M; i++) {
        const [x, y] = input[i].split(" ").map(Number);
        arr[x][y] = 1;
        arr[y][x] = 1;
    }

    const dfs = (v) => {
        dfsResult.push(v);
        dfsVisited[v] = true;

        for (let i = 1; i < arr[v].length; i++) {
            if (arr[v][i] === 1 && !dfsVisited[i]) {
                dfs(i);
            }
        }
    };

    const bfs = (v) => {
        queue.push(v);
        bfsVisited[v] = true;
        while (queue.length > 0) {
            const cur = queue.shift();
            bfsResult.push(cur);
            for (let next = 1; next <= N; next++) {
                if (arr[cur][next] === 1 && !bfsVisited[next]) {
                    queue.push(next);
                    bfsVisited[next] = true;
                }
            }
        }
    };

    dfs(V);
    bfs(V);
    console.log(dfsResult.join(" "));
    console.log(bfsResult.join(" "));
}

solutaion(input);
