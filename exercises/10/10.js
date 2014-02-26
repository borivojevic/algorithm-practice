'use strict';

function solution(A) {
  var passingCars = 0;
  var zeros = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      zeros++;
    }
    if (A[i] === 1) {
      passingCars = passingCars + zeros;
    }
    if (passingCars > 1000000000) {
      return -1;
    }
  }
  return passingCars;
}

// document.write(solution([0, 1, 0, 1, 1]));
document.write(solution([0, 1, 1, 1, 1, 1]));
