import getLongWords from "./getLongWords.js";

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

test("getLongWords function for LANGUAGES array", () => {
  const result = getLongWords(LANGUAGES);
  const expectedOutput = ["JavaScript", "TypeScript"];
  expect(result).toEqual(expectedOutput);
});

test("getLongWords function for BEATLES array", () => {
  const result = getLongWords(BEATLES);
  const expectedOutput = ["George", "Ringo"];
  expect(result).toEqual(expectedOutput);
});
