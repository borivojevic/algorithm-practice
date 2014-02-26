'use strict';

// Find the three largest numbers in the array (n1, n2, n3)
// and the two smallest numbers (m1, m2).
// The answer is either n1 x n2 x n3 or n1 x m1 x m2
function solution(A) {
  var sorted = A.sort(function(a, b) {
    return a - b;
  });
  var aLength = A.length;
  var p1 = sorted[aLength-1] * sorted[aLength-2] * sorted[aLength-3];
  var p2 = sorted[aLength-1] * sorted[0] * sorted[1];
  return p1 > p2 ? p1 : p2;
}

document.write(solution([-3, -60, 1, 2, -2, 5, 6]));
