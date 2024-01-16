import { getLongWords } from "./getLongWords.js";

describe("Given getLongWords", () => {
  test("When array equals to: ['Java', 'C++', 'JavaScript', 'C#', 'TypeScript'], then expected value should be returned", () => {
    const WORDS = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const EXPECTED_RESULT = ["JavaScript", "TypeScript"];

    const longLanguages = getLongWords(WORDS);

    expect(longLanguages).toBeDefined();
    expect(longLanguages).toEqual(EXPECTED_RESULT);
  });

  test("When [John, George, Paul, Ringo] is provided as argument, then expected array should be returned", () => {
    const BEATLES = ["John", "George", "Paul", "Ringo"];
    const EXPECTED_RESULT = ["George", "Ringo"];

    const result = getLongWords(BEATLES);

    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
