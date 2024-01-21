import getWordFromValues from "./getWordFromValues.js";
const VALUES = [1, 2, 3];

test("getWordFromValues function", () => {
  const result = getWordFromValues(VALUES);
  expect(result).toBe("123");
});
