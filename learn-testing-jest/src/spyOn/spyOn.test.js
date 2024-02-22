import * as app from "./../mockFn/app.js";
import * as math from "./../mockFn/math.js";

describe("Learning spyOn", () => {
  test("test case for spyOn", () => {
    const addMock = jest.spyOn(math, "add");

    // check mock function
    expect(jest.isMockFunction(math.add)).toBe(true);

    // app(1,2);  // cannot call spy function directly

    // calls the original implementation
    expect(app.doAdd(1, 2)).toEqual(3);

    // and the spy stores the calls to add
    expect(addMock).toHaveBeenCalledWith(1, 2);
  });

  test("custom implementation then restore", () => {
    const addMock = jest.spyOn(math, "add");

    // override the implementation
    addMock.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");

    // restore the original implementation
    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
  });
});
