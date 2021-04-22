// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  // let reversed = n.toString().split("").reverse().join("");

  // return parseInt(reversed) * Math.sign(n);

  let n1 = parseInt(num);
  let rem = 0,
    n = 0;
  while (n1 !== 0) {
    rem = n1 % 10;
    n = n * 10 + rem;
    n1 = parseInt(n1 / 10, 10);
  }
  return n;
}

module.exports = reverseInt;
