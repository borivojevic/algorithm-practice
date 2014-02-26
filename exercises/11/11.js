'use strict';

function solution(S, P, Q) {
  var sort = [];
  for (var i = 0; i < P.length; i++) {
    var char = S.slice(P[i], Q[i]+1).split('').sort()[0];
    if (char === 'A') {
      sort[i] = 1;
    }
    if (char === 'C') {
      sort[i] = 2;
    }
    if (char === 'G') {
      sort[i] = 3;
    }
    if (char === 'T') {
      sort[i] = 4;
    }
  }
  return sort;
}

var S = 'GACACCATA';
var P = [0, 0, 4, 7];
var Q = [8, 2, 5, 7];

document.write(solution(S, P, Q));
