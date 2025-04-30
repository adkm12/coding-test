package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main()  {
	reader := bufio.NewReader(os.Stdin)
	writer := bufio.NewWriter(os.Stdout)
	defer writer.Flush()
	input, _ := reader.ReadString('\n')
	input = strings.TrimSpace(input)
	n, _ := strconv.Atoi(input)

	dp := make([]int, n+1)

	for i := 1; i <= n; i++ {
		dp[i] = -1
		if i >= 3 && dp[i-3] != -1 {
			dp[i] = dp[i-3] +1
		}
		if i >= 5 && dp[i-5] != -1{
			if dp[i] == -1 {
				dp[i] = dp[i-5] +1
			} else {
				dp[i] = min(dp[i], dp[i-5]+1)
			}
		}
	}
	fmt.Fprintln(writer, dp[n])
}