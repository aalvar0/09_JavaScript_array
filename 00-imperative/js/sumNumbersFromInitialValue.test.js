import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue.js";

describe("Given function sumNumbersFromInitialValue...", () => {
  test("When initial is 0, then expected value should be returned", () => {
    const numberParameter = 0;
    const EXPECTED_RESULT = 15;

    const result = sumNumbersFromInitialValue(numberParameter);

    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
  test("When initial value is ${numberParameter}, then the sum should be ${EXPECTED_RESULT}", () => {
    const numberParameter = 10;
    const EXPECTED_RESULT = 25;

    const result = sumNumbersFromInitialValue(numberParameter);

    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
