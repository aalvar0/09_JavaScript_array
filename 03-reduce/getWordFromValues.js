/**
 * Given 'VALUES' array, define function 'getWordFromValues' to return a string of all those numbers.
 *
 * expected: '123'
 */

const VALUES = [1, 2, 3];

function getWordFromValues() {
  return VALUES.reduce((acc, value) => acc + value, "");
}

export default getWordFromValues;
