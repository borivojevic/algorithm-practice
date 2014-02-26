'use strict';

function solution(A) {
  var aLength = A.length;
  var size = 0;
  var value;
  for (var k in A) {
    if (size === 0) {
      size++;
      value = A[k];
    } else {
      if (value !== A[k]) {
        size--;
      } else {
        size++;
      }
    }
  }
  var candidate = -1;
  if (size > 0) {
    candidate = value;
  }
  var leader = -1;
  var count = 0;
  var index = -1;
  for (k in A) {
    if (A[k] === candidate) {
      index = k;
      count++;
    }
  }
  if (count > aLength / 2) {
    leader = index;
  }
  return leader;
}

document.write(solution([3, 4, 3, 2, 3, 1, 3, 3]));
// document.write(solution([]));
