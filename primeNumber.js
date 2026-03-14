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

function betterIsPrime(n) {
  if(n < 2) {
    return false
  } else {
    for(let i = 2; i < Math.sqrt(n); i++) {
      if(n % i === 0) {
        return false
      } else {
        return true
      }
    }
  }
}

console.log(betterIsPrime(0)) // false
console.log(betterIsPrime(4)) // false
console.log(betterIsPrime(5)) // true

// Big-O = O(sqrt(n))
