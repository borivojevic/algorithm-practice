'use strict';

var isPrime = function(number) {
	if (number < 2) {
		return false;
	}
	if (number === 2) {
		return true;
	}
	var max = Math.sqrt(number);
	max = Math.ceil(max);
	for (var i = 2; i <= max; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
};

var isPalindrome = function(number) {
	var str = number+'';
	return str === str.split('').reverse().join('');
};

var sumDigits = function(number) {
	var str = number+'';
	var sum = 0;
	for (var i = 0; i < str.length; i++) {
		sum += parseInt(str[i], 10);
	}
	return sum;
};

var palindromicNumbers = function() {
	var result = 0;
	for (var i = 10; i <= 100000; i++) {
		if (isPalindrome(i) && isPrime(sumDigits(i))) {
			result++;
		}
	}
	return result;
};

document.write(palindromicNumbers());