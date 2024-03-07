/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLocaleLowerCase();
  let strLength = str.length;
  let firstHalfStartIndex = 0;
  let firstHalfEndIndex = Math.floor(strLength/2);
  let lastHalfFirstIndex = Math.ceil(strLength/2);
  let lastHalfEndIndex = strLength;

  let strFirstHalf = str.slice(firstHalfStartIndex,firstHalfEndIndex).split('').sort().join('');
  let strLastHalf = str.slice(lastHalfFirstIndex,lastHalfEndIndex).split('').sort().join('');
  
  if (strFirstHalf == strLastHalf) {
  return true;
  }
}

module.exports = isPalindrome;
