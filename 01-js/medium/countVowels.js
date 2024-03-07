/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let allVowels = ['a','A','e','E','i','I','o','O','u','U'];
    let count = 0;
    str.split('');
    for(let i =0; i<str.length; i++){
      if(allVowels.includes(str[i])){
          count ++;
      }
    }
    return count;
    
}

module.exports = countVowels;