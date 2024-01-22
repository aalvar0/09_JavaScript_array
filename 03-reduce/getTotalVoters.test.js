import getTotalVoters from "./getTotalVoters.js";
const VOTERS = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

describe("getTotalVoters function", () => {
  test("when given an array of voters, then it returns the correct total number of voters", () => {
    const totalVoters = getTotalVoters(VOTERS);

    expect(totalVoters).toBe(7);
  });
});
