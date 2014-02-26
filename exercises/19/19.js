'use strict';

var controllList = ['heros', 'horse', 'shore', 'erahs'];

var checkAnagrams= function(word) {
  var hash = word.split('').sort().join('');
  var anagrams = [];
  for (var k in controllList) {
    var w = controllList[k];
    if (w.split('').sort().join('') === hash) {
      anagrams.push(w);
    }
  }
  return anagrams;
};

document.write(checkAnagrams('horse'));
