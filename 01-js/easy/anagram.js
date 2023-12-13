/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let str1Arr = str1.split("");
  let str2Arr = str2.split("");

  if (str1Arr.length !== str2Arr.length) {
    return false;
  }

  for (let i = 0; i < str1Arr.length; i++) {
    let index = str2Arr.indexOf(str1Arr[i]);
    if (index === -1) {
      return false;
    }
    str2Arr.splice(index, 1);
  }
  return true;
}

module.exports = isAnagram;
