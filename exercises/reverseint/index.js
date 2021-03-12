// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const nStr = Math.abs(n).toString();
  let nReversed = '';

  for (const digit of nStr) {
    nReversed = digit + nReversed;
  }

  nReversed = parseInt(nReversed) * Math.sign(n);

  return nReversed;
}

module.exports = reverseInt;
