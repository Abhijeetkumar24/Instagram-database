function factorial(num) {
    const numbers = Array.from({ length: num }, (_, index) => BigInt(index + 1));
    return numbers.reduce((acc, curr) => acc * curr, BigInt(1));
  }
  
console.log(factorial(50000).toString());
  