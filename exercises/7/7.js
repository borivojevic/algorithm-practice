'use strict';

function solution(X, Y, D) {
  var distance = Y-X;
  var jumps = Math.ceil(distance/D);
  return jumps;
}

document.write(solution(10, 85, 30));
