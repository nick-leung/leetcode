/**
 Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
 */

var reverseString = function(s) {
  var output = '';

  for (var i = s.length - 1; i >= 0; i--) {
    output += s[i];
  }

  return output;
};
