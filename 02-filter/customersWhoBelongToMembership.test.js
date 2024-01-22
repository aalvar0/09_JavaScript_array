import customersWhoBelongToMembership from "./customersWhoBelongToMembership.js";

const CUSTOMERS = [
  {
    name: "Foo",
    member: true,
  },
  {
    name: "Bar",
    member: false,
  },
  {
    name: "Fizz",
    member: true,
  },
  {
    name: "Buzz",
    member: false,
  },
  {
    name: "FizzBuzz",
    member: true,
  },
];
describe("customersWhoBelongToMembership function", () => {
  test("when given customers, then it returns the correct filtered customers", () => {
    const filteredCustomers = customersWhoBelongToMembership(CUSTOMERS);

    const expectedOutput = [
      { name: "Foo", member: true },
      { name: "Fizz", member: true },
      { name: "FizzBuzz", member: true },
    ];
    expect(filteredCustomers).toEqual(expectedOutput);
  });
});
