import sumNumbersFromInitialValue from "./sumNumbersFromInitialValue.js";

const NUMBERS = [1, 2, 3, 4, 5];

describe("sumNumbersFromInitialValue function", () => {
  test("when initial value is 0, then it returns the correct sum", () => {
    const result = sumNumbersFromInitialValue(0);

    const expectedOutput = 15;
    expect(result).toEqual(expectedOutput);
  });

  test("when initial value is 10, then it returns the correct sum", () => {
    const result = sumNumbersFromInitialValue(10);

    const expectedOutput = 25;
    expect(result).toEqual(expectedOutput);
  });
});
