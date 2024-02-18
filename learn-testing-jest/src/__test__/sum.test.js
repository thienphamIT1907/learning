import { sum } from "./../sum.js";

describe.skip("Test with mock data", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 5 + 5 to equal 10", () => {
    expect(sum(5, 5)).toEqual(10);
  });
});

const student = {
  name: "Thien",
  age: 30,
};

const developer = {
  name: "Thien",
  age: 30,
};

describe.skip("Compare student and developer", () => {
  test("toBe compare", () => {
    expect(student).not.toBe(developer);
  });

  test("toEqual compare", () => {
    expect(student).toEqual(developer);
  });

  test("toStrictEqual compare", () => {
    expect(student).toStrictEqual(developer);
  });
});
