'use strict';

var count = function(n) {
  var result = 0;
  for (var i = 1; i <= n; i++) {
    result += i * i;
  }
  return result;
};

document.write(count(100));
