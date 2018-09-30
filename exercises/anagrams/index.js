// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Best way!
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;


/*

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}


// ---------------------------------------


// My Attempt - Not Working...
function anagrams(stringA, stringB) {
  const createArr = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort((a,b) => a > b);
  stringA = createArr(stringA);
  stringB = createArr(stringB);
  const stringAObj = {};
  const stringBObj = {};
  const result = true;

  for (let letter of stringA) {
    stringAObj[stringB[letter]] = stringAObj[letter] + 1 || 1;
  }

  for (let letter of stringB) {
    stringBObj[stringB[letter]] = stringBObj[letter] + 1 || 1;
  }

  const sorted = [stringAObj, stringBObj].sort((a,b) => a.length > b.length);
  const longerObj = sorted[1];
  const shorterObj = sorted[0];

  console.log('shorterObj', shorterObj);
  console.log('longerObj', longerObj);

  for (let i = 0; i < Object.keys(shorterObj).length; i++) {
    console.log(`${shorterObj[i]} !== ${longerObj[i]} = ${shorterObj[i] === longerObj[i]}`);
    if (shorterObj[i] !== longerObj[i]) result = false;
  }

  return result;
}

*/