'use strict';

function solution(X, A) {
  var aLength = A.length;
  var K = 0;
  var leafs = [];
  var lCount = 0;
  loop: while (K < aLength) {
    var leaf = A[K];
    if (leaf <= X && leafs[leaf] === undefined) {
      leafs[leaf] = true;
      lCount++;
    }
    if (lCount === X) {
      return K;
    }
    K++;
  }
  return -1;
}

var A = [1, 3, 1, 4, 2, 3, 5, 4];
document.write(solution(5, A));
