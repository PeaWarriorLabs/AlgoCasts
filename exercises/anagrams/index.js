// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharMap = cleanString(stringA);
  const bCharMap = cleanString(stringB);

  if (Object.entries(aCharMap).length !== Object.entries(bCharMap).length) return false;

  for (const char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) return false;
  }

  return true;
}

function cleanString(str) {
  let charMap = {};
  str = str.replace(/[^\w]/g, '').toLowerCase();

  for (const char of str) {
    charMap[char] = ++charMap[char] || 1;
  }

  return charMap;
}

module.exports = anagrams;
