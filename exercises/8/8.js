'use strict';

function solution(A) {
  var max = Number.MIN_VALUE;
  var min = Number.MAX_VALUE;
  var sum = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] > A.length || A[i] < 0) {
      return 0;
    }
    if (A[i] > max) {
      max = A[i];
    }
    if (A[i] < min) {
      min = A[i];
    }
    sum += A[i];
  }
  var eSum = (max * (max + 1)) / 2;
  if (min === 1 && max === A.length && sum === eSum) {
    return 1;
  } else {
    return 0;
  }
}

document.write(solution([1]));
document.write(solution([4, 1, 3, 2]));
document.write(solution([4, 1, 3]));
