// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charCount = {};
  let currentMaxChar = str[0];
  let currentCount = 0;

  for (const character of str) {
    charCount[character] = ++charCount[character] || 1;
    if (charCount[character] > currentCount) {
      currentMaxChar = character;
      currentCount = charCount[character];
    }
  }
  
  return currentMaxChar;
}

module.exports = maxChar;
