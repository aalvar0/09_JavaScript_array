import getLongWords from "./getLongWords.js";

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

describe("getLongWords function", () => {
  test("when given an array of languages, then it returns the correct array of long words", () => {
    const result = getLongWords(LANGUAGES);

    const expectedOutput = ["JavaScript", "TypeScript"];
    expect(result).toEqual(expectedOutput);
  });

  test("when given an array of Beatles names, then it returns the correct array of long words", () => {
    const result = getLongWords(BEATLES);

    const expectedOutput = ["George", "Ringo"];
    expect(result).toEqual(expectedOutput);
  });
});
