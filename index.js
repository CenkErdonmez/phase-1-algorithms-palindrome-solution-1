function isPalindrome(word) {
  // Reverse the word
  const reversedWord = word.split("").reverse().join("");

  // Compare the reversed word with the original word
  return word === reversedWord;
}


/* 
  1. Reverse the word by splitting it into an array of characters, reversing the array, and joining it back into a string.
2. Compare the reversed word with the original word.
3. Return true if they are the same, indicating that the word is a palindrome.
4. Return false if they are different, indicating that the word is not a palindrome.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
