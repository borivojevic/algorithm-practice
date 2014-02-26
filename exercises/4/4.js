'use strict';

var countdivisibleBy7or17 = function() {
  var numbers = [];
  var result = 0;
  var top = Math.pow(8, 8);
  // divisible by 7
  var progress = 7;
  while (progress <= top) {
    numbers[progress] = true;
    progress += 7;
    result++;
  }
  // divisible by 17
  progress = 17;
  while (progress <= top) {
    if (numbers[progress] === undefined) {
      numbers[progress] = true;
      result++;
    }
    progress += 17;
  }
  return result;
};

document.write(countdivisibleBy7or17());
