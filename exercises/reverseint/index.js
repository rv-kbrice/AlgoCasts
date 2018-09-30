// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Third Solution
function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

/*
NOTE:
parseInt() convert string into number
.toString() to convert numbers into strings
Math.sign() returns whether number is negative (-1) or positive (1)


// Second Solution
function reverseInt(n) {
  let str = Math.sign(n) < 0 ? -n : n;
  let reverse = parseInt(str.toString().split('').reverse().join(''));
  return Math.sign(n) < 0 ? -reverse : reverse;
}

// First Solution
function reverseInt(n) {
  let str = String(n < 0 ? -n : n);
  let reverse = Number(str.split('').reverse().join(''));
  return (n < 0) ?  -reverse : reverse;
}
*/