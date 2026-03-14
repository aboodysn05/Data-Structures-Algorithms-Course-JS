function fibonacci(n) {
  const fib = [0,1]
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}

console.log(fibonacci(2)) //[ 0, 1 ]
console.log(fibonacci(4)) //[ 0, 1, 1, 2 ]
console.log(fibonacci(9)) //[0, 1,  1,  2, 3, 5, 8, 13, 21]
console.log(fibonacci(0)) //[ 0, 1 ]
console.log(fibonacci(1)) //[ 0, 1 ]

// Big-O = O(n)