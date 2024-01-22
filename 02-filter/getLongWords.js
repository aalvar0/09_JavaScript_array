/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater than 5
 * use filter() method
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

function getLongWords(words) {
  return words.filter((word) => word.length >= 5);
}

export default getLongWords;
