import calculateShopping from "./calculateShopping.js";

const WISHES = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

describe("calculateShopping function", () => {
  test("when given WISHES array, then it returns the correct total cost", () => {
    const result = calculateShopping(WISHES);

    expect(result).toBe(227005);
  });
});
