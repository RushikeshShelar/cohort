/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/\s/g,'').replace(/[^\w\s]|_/g,'').toLowerCase();
  let strArr = str.split("");
  let length = strArr.length;
  for(let i = 0; i< Math.floor(length / 2); i++){
    if(strArr[i] !== strArr[length - i - 1]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
