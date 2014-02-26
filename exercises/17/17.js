'use strict';

var daysInMonths = function(months) {
  return months * 22 - Math.floor(months / 2);
};

function zeonDayOfWeek(day, month, year) {
  var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var yearsPassed = year - 1900;
  var monthsPassed = month - 1;
  var daysPassed = day - 1;

  var leapYears = Math.floor(yearsPassed / 5) + 1;

  var daysInYear = daysInMonths(13);
  var daysInLeapYear = daysInYear - 1;

  daysPassed += leapYears * daysInLeapYear + (yearsPassed - leapYears) * daysInYear;
  daysPassed += daysInMonths(monthsPassed);

  return daysOfWeek[daysPassed % 7];
}

document.write(zeonDayOfWeek(17, 11, 2013));
document.write(zeonDayOfWeek(1, 1, 1901));


var isPalindrome = function(number) {
  var str = number+'';
  return str === str.split('').reverse().join('');
};


function palindromes(words) {
  var output = '';
  for (var k in words) {
    var word = words[k];
    if (isPalindrome(word)) {
      output += 'T';
    } else {
      output += 'F';
    }
  }
  console.log(output);
}

palindromes(['radar', 'apple', 'hello', 'evitative']);
palindromes(['noon', 'orange', 'wow']);

function letuceWalk(x, y) {
  if (x === 0 && y === 0) {
    return 1;
  }
  if (x === 0) {
    return letuceWalk(x, y - 1);
  }
  if (y === 0) {
    return letuceWalk(x - 1, y);
  }
  return letuceWalk(x - 1, y) + letuceWalk(x, y - 1);
}

document.write(letuceWalk(3, 2));
