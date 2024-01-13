import { capitalizeMates } from "./capitalizeMates.js";
describe("Given capitalizeMates", () => {
  test("When capitalizing MATES array, then the result should have capitalized names", () => {
    const mates = ["john", "JACOB", "jinGleHeimer", "schmidt"];
    const result = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    const matesCapitalized = capitalizeMates(mates);

    expect(matesCapitalized).toBeDefined();
    expect(matesCapitalized.length).toEqual(4);
    expect(matesCapitalized).toEqual(result);
  });
});
