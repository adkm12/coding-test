package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var delta = [4][2]int{{-1, 0}, {1, 0}, {0, 1}, {0, -1}}

// strArrToint string 배열과 int 변수들을 받고, 순서대로 int변수에 값 대입입
func strArrToint (s []string, vars... *int) {
	for i,str := range s {
		*vars[i], _ = strconv.Atoi(str)
	}
}

// makeBoard 입력값으로 배추밭을 만듬
func makeBoard(M int, N int, K int, r *bufio.Reader) [][]int{
	board := make([][]int, M)
	
	for i:=0; i<M; i++ {
		board[i] = make([]int, N)
	}

	for i:=0; i<K; i++ {
		loc, _ := r.ReadString('\n')
		loc = strings.TrimSpace(loc)
		xy := strings.Fields(loc)
		var x, y int
		strArrToint(xy, &x, &y)
		board[x][y] = 1
	}

	return board
}


// dfs 해당 xy에서 갈 수 있는 모든 경로에 대해 방문하고 board를 0으로 만듬
func dfs(board [][]int, x,y int) {
	board[x][y] = 0

	for _, d := range delta {
		nx, ny := x + d[0], y + d[1]

		if nx >=0 && ny >=0 && nx <len(board) && ny < len(board[0]) && board[nx][ny] == 1 {
			dfs(board, nx, ny)
		}
	}
}

func main() {
	r := bufio.NewReader(os.Stdin)
	w := bufio.NewWriter(os.Stdout)
	defer w.Flush()

	line,_ := r.ReadString('\n')
	line = strings.TrimSpace(line)

	T, _ := strconv.Atoi(line)

	for i:=0; i<T; i++ {
		line, _ = r.ReadString('\n')
		line = strings.TrimSpace(line)
		token := strings.Fields(line)

		var M, N, K int
		strArrToint(token, &M, &N, &K)
		board :=makeBoard(M, N, K, r)
		count := 0

		for i := 0; i < M; i++ {
			for j := 0; j < N; j++ {
				if board[i][j] == 1 {
					dfs(board, i, j)
					count++
				}
			}
		}
		fmt.Fprintln(w, count)
	}
}