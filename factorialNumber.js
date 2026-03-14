function factorial(n) {
  let sum = 1
  for(let i = 2; i <= n; i++) {
    sum = sum * i
  }
  return sum
}

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(3)) // 6
console.log(factorial(10)) // 3628800

// Big-O = O(n)