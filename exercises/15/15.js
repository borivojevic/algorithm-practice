'use strict';

var maxSlice = function(A) {
  var max = function(a, b) {
    return a > b ? a : b;
  };
  var maxSlice = 0, maxEnd = 0;
  for (var k in A) {
    maxEnd = max(0, maxEnd + A[k]);
    maxSlice = max(maxSlice, maxEnd);
  }
  return maxSlice;
};

document.write(maxSlice([5, -7, 3, 5, -2, 4, -1]));
