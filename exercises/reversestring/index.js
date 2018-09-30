// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 3 - reduce
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

/*

// Solution 1 with reverse()
function reverse(str) {
  return str.split('').reverse().join('');
}

// Solution 3 - for of
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// Solution 3 with for loop
function reverse(str) {
  let strArr = str.split('');
  let newArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let last = strArr.pop();
    newArr.push(last);
  }

  return newArr.join('');
}

*/
