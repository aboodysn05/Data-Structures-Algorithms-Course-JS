function isPrime(n) {
  if(n < 2) {
    return false
  } else {
    for(let i = 2; i < n; i++) {
      if(n % i === 0) {
        return false
      } else {
        return true
      }
    }
  }
}

console.log(isPrime(0)) // false
console.log(isPrime(4)) // false
console.log(isPrime(5)) // true

// Big-O = O(n)
