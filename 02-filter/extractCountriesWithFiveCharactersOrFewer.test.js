import extractCountriesWithFiveCharactersOrFewer from "./extractCountriesWithFiveCharactersOrFewer.js";

const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

describe("", () => {
  test("extractCountriesWithFiveCharactersOrFewer returns correct array", () => {
    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);
    expect(result).toEqual(["Italy"]);
  });
});
