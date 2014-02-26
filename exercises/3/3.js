'use strict';

var isPrime = function(number) {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  var max = Math.sqrt(number);
  max = Math.ceil(max);
  for (var i = 2; i <= max; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

var sumOfPrimes = function() {
  var result = 0;
  for (var i = 1; i <= 100; i++) {
    if (isPrime(i)) {
      result += i;
    }
  }
  return result;
};

document.write(sumOfPrimes());
