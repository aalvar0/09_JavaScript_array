import getEvensOnly from "./getEvensOnly.js";

const COUNTERS = [2, 25, 43, 12, 67, 42, 28];

test("getEvensOnly returns correct array", () => {
  const result = getEvensOnly(COUNTERS);
  expect(result).toEqual([2, 12, 42, 28]);
});
