'use strict';

function solution(A) {
  var minimum = Number.MAX_VALUE;
  var aLength = A.length;
  if (aLength === 1) {
    return A[0];
  }
  var aSum = 0;
  for (var i = 0; i < aLength; i++) {
    aSum += A[i];
  }
  var low = 0;
  for (var p = 1; p < aLength; p++) {
    low += A[p-1];
    var high = aSum - low;
    var diff = Math.abs(low-high);
    if (diff < minimum) {
      minimum = diff;
    }
  }
  return minimum;
}

var A = [-300, 1, 2, 4, 3];
// var A = [3, 4];
document.write(solution(A));
