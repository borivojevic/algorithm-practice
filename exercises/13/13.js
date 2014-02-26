'use strict';

function solution(S) {
  var sArray = S.split('');
  var balance = [];
  for (var i = 0; i < sArray.length; i++) {
    var c =sArray[i];
    if (c === '{' || c === '[' || c === '(') {
      balance.push(c);
    } else {
      switch (c) {
        case '}':
          if (balance.pop() !== '{') {
            return 0;
          }
          break;
        case ']':
          if (balance.pop() !== '[') {
            return 0;
          }
          break;
        case ')':
          if (balance.pop() !== '(') {
            return 0;
          }
          break;
      }
    }
  }
  return balance.length === 0 ? 1 : 0;
}

document.write(solution('{[()()]}'));
// document.write(solution('([)()]'))
// document.write(solution('))
