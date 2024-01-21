import sumNumbersFromInitialValue from "./sumNumbersFromInitialValue.js";

const NUMBERS = [1, 2, 3, 4, 5];

test("sumNumbersFromInitialValue function with initial value 0", () => {
  const result = sumNumbersFromInitialValue(0);
  const expectedOutput = 15;
  expect(result).toEqual(expectedOutput);
});

test("sumNumbersFromInitialValue function with initial value 10", () => {
  const result = sumNumbersFromInitialValue(10);
  const expectedOutput = 25;
  expect(result).toEqual(expectedOutput);
});
