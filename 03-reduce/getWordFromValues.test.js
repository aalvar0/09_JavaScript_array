import getWordFromValues from "./getWordFromValues.js";
const VALUES = [1, 2, 3];

describe("getWordFromValues function", () => {
  test("when given an array of values, then it returns the concatenated string", () => {
    const result = getWordFromValues(VALUES);

    expect(result).toBe("123");
  });
});
