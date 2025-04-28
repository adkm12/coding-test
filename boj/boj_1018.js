const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

const [x, y] = input.shift().split(" ");
const board = input.map((line) => line.split(""));

const startW = "WBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBW";
const startB = "BWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWB";

const sliceArray = (arr, sr, er, sc, ec) => {
    return arr.slice(sr, er).map((row) => row.slice(sc, ec));
};

const calcCount = () => {
    let minCount = Infinity;

    const checkBoard = (board, color) => {
        let count = 0;

        const flatBoard = board.flat().concat();
        let compair = "";
        if (color === "B") {
            compair = startB;
        } else {
            compair = startW;
        }

        for (let i = 0; i < 64; i++) {
            if (count > minCount) break;
            if (flatBoard[i] !== compair[i]) count++;
        }

        return count;
    };

    for (let i = 0; i <= Number(x) - 8; i++) {
        for (let j = 0; j <= Number(y) - 8; j++) {
            const count = Math.min(
                checkBoard(sliceArray(board, i, i + 8, j, j + 8), "B"),
                checkBoard(sliceArray(board, i, i + 8, j, j + 8), "W")
            );
            minCount = Math.min(count, minCount);
        }
    }
    return minCount;
};

console.log(calcCount());
