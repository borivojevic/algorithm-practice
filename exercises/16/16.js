'use strict';

function solution(A) {
  var max = function(a, b) {
    return a > b ? a : b;
  };
  var aSum = 0;
  var aLen = A.length;
  for (var k in A) {
    aSum += A[k];
  }
  aSum = aSum - A[aLen-1] - A[1];
  var lowSlice = 0, lowEnd = 0, highSlice = 0, highEnd = 0, total = 0;
  for (var i = 1; i < A.length-2; i++) {
    lowEnd = max(0, lowEnd + A[i-1]);
    lowSlice = max(lowSlice, lowEnd);
    highEnd = max(0, aSum-lowEnd-A[i]);
    highSlice = max(highSlice, highEnd);
    total =  max(total, lowEnd+highEnd);
  }
  return total;
}

document.write(solution([3, 2, 6, -1, 4, 5, -1, 2]));
