import { sum } from "../utils";

describe("Test sum util function", () => {
  test("should return sum of 2 numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
