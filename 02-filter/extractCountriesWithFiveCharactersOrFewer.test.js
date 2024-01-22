import extractCountriesWithFiveCharactersOrFewer from "./extractCountriesWithFiveCharactersOrFewer.js";

const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

describe("extractCountriesWithFiveCharactersOrFewer function", () => {
  test("when given countries, then it returns the correct array", () => {
    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    expect(result).toEqual(["Italy"]);
  });
});
