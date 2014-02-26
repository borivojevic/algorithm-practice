'use strict';

function solution(A) {
  if (A.length === 0) {
    return 1;
  }
  var max = Number.MIN_VALUE;
  var aSum = 0;
  for (var i = 0; i < A.length; i++) {
    aSum += A[i];
    if (A[i] > max)  {
      max = A[i];
    }
  }
  var bSum = (max * (max + 1)) / 2;
  var result = bSum - aSum;
  result = result ? result : max+1;
  return result;
}

document.write(solution([]));
document.write(solution([1]));
document.write(solution([2]));
document.write(solution([1, 2]));
document.write(solution([1, 2, 3, 4, 5, 7]));
