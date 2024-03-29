import getEvensOnly from "./getEvensOnly.js";

const COUNTERS = [2, 25, 43, 12, 67, 42, 28];

describe("getEvensOnly function", () => {
  test("when given an array of numbers, then it returns the correct array of even numbers", () => {
    const result = getEvensOnly(COUNTERS);

    expect(result).toEqual([2, 12, 42, 28]);
  });
});
