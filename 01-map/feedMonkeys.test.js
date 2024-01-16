import { feedMonkeys } from "./feedMonkeys.js";

describe("Given feedMonkeys", () => {
  test("When 🍌ís provided as argument Then expected array should be returned", () => {
    const fruit = "🍌";
    const EXPECTED_RESULT = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

    const monkeys = feedMonkeys(fruit);

    expect(monkeys).toBeDefined();
    expect(monkeys).toEqual(EXPECTED_RESULT);
  });
});

test("When 🍎 ís provided as argument Then expected array should be returned", () => {
  const fruit = "🍎";
  const EXPECTED_RESULT = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];

  const monkeys = feedMonkeys(fruit);

  expect(monkeys).toBeDefined();
  expect(monkeys).toEqual(EXPECTED_RESULT);
});
