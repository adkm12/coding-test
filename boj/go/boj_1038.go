package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func solution1038(N int, w *bufio.Writer) {
	result := make([]string, 0)
	result = append(result, "0","1","2","3","4","5","6","7","8","9")
	
	for n:=2; n<=10; n++ { // n자릿수, 9876543210 이 최대
		numArr := make([]int, n)
		dfs1038(numArr, n, 0, &result)
		if len(result) > N {
			fmt.Fprintln(w, result[N])
			return
		}
	}
	fmt.Fprintln(w, -1)
}

func dfs1038(numArr []int, n int, depth int, result *[]string) {
	if n == depth {
		*result = append(*result, intBuilder(numArr))
		return
	}

	for i:= 0; i<10; i++ {
		if depth == 0 {
			if i == 0  || i < n-1{
				continue
			} else {
				numArr[depth] = i
				dfs1038(numArr, n, depth+1, result)
			}
		} else {
			if i < numArr[depth -1] {
				numArr[depth] = i
				dfs1038(numArr, n, depth+1, result)
			}
		}
	}
}
func intBuilder(intArr []int) string {
	var b strings.Builder
	for _,v := range intArr {
		str := strconv.Itoa(v)
		b.WriteString(str)
	}
	return b.String()
}

func main() {
	r := bufio.NewReader(os.Stdin)
	w := bufio.NewWriter(os.Stdout)
	defer w.Flush()

	line,_ := r.ReadString('\n')
	line = strings.TrimSpace(line)
	N, _ := strconv.Atoi(line)

	if N < 10 {
		fmt.Fprintln(w, N)
		return
	} else if N >= 500000 {
		fmt.Fprintln(w, -1)
		return
	}

	solution1038(N, w)
}