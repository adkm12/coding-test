package main

import (
	"bufio"
	"fmt"
	"os"
)

func sum(L int) int {
	return L * (L-1) / 2
}

func main() {
	r := bufio.NewReader(os.Stdin)
	w := bufio.NewWriter(os.Stdout)
	defer w.Flush()

	var N, L int 
	fmt.Fscan(r, &N, &L)

	// a, a+1, a+2, ... a+(L-1))
	// N = La + (1+2+..+(L-1))
	// a = (N-(sum)) / L

	for i:=L; i<=100; i++ {
		sum := sum(i)
		if sum > N {
			break
		}
		if (N - sum) % i == 0 && (N - sum) / i >= 0{
			a := (N - sum) / i
			for j:= 0; j<i; j++ {
				if j>0 {
					fmt.Fprint(w," ")
				}
				fmt.Fprint(w, a+j)
			}
			return
		}
	}
	fmt.Fprint(w, -1)
}
