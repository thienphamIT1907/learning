describe.skip("toBe matcher", () => {
  /**
   * toBe: Compare primitive value use Object.is()
   * with reference value: Compare reference address
   */
  test("use toBe", () => {
    const obj1 = {};
    const obj2 = {};
    expect(obj1).not.toBe(obj2);
  });
  test("use toBe with sum num", () => {
    const sum = (a, b) => a + b;
    expect(sum(10, 10)).toBe(20);
  });
});

describe.skip("toEqual / toStrictEqual matcher", () => {
  const student = {
    name: "Thien",
    age: undefined,
  };

  const developer = {
    name: "Thien",
  };
  test("compare two object use toEqual", () => {
    /**
     * toEqual: Use deep comparison
     * With reference value: Compare reference and all properties between 2 objects
     * With primitive value: Compare use Object.is()
     * Non-check with undefined property
     */
    expect(student).toEqual(developer); // equal because 2 objects have name and age property
  });

  it("compare object with function return object", () => {
    const generateInfo = () => ({
      firstName: "Thien",
      lastName: "Pham",
    });

    expect(generateInfo()).toStrictEqual({
      firstName: "Thien",
      lastName: "Pham",
    });
  });

  test("compare two object use toStrictEqual", () => {
    /**
     * toStrictEqual: same with toEqual
     * toEqual not check property is undefined
     *
     */
    expect(student).not.toStrictEqual(developer); // not strict equal because age: undefined,
  });
});

describe.skip("toMatch", () => {
  test("There is no `I` in my name", () => {
    const myName = "Thien";

    expect(myName).not.toMatch(/I/);
  });

  test("My full name should be Thien Pham", () => {
    const myFullname = "Thien Pham";
    expect(myFullname).toMatch("Thien Pham");
  });
});

describe.skip("toContain", () => {
  test("reactjs should be in techStack", () => {
    const myTechStack = ["nextjs", "tailwind", "redux", "reactjs"];
    expect(myTechStack).toContain("reactjs");
  });

  test("ie should be in Thien", () => {
    const myName = "Thien";
    expect(myName).toContain("ie");
  });
});
