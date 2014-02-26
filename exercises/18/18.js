'use strict';

var formattNumber = function(number) {
  var arr = (number+'').split('').reverse();
  var result = [];
  for (var k in arr) {
    result = result.concat(arr[k]);
    if (k !== (arr.length - 1) && (k+1) % 3 === 0) {
      result = result.concat([',']);
    }
  }
  // remove leading ,
  if (result[result.length-1] === ',') {
    result.splice(-1);
  }
  result = result.reverse().join('');
  return result;
};

// 1 -> "1"
// 10 -> "10"
// 100 -> "100"
// 1000 -> "1,000"
// 10000 -> "10,000"
// 100000 -> "100,000"
// 1000000 -> "1,000,000"
// 35235235 -> "35,235,235"
document.write(formattNumber(35235235));
document.write(formattNumber(10000000));
