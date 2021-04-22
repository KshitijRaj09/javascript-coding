// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChar = {};
  let max = 0;
  let maxValue = "";
  for (let characters of str) {
    if (!maxChar[characters]) {
      maxChar[characters] = 1;
    } else {
      maxChar[characters] += 1;
    }
  }
  console.log(maxChar);
  for (let char in maxChar) {
    if (max < maxChar[char]) {
      max = maxChar[char];
      maxValue = char;
    }
  }
  let arr = [maxValue, max];
  return maxValue;
}

module.exports = maxChar;
