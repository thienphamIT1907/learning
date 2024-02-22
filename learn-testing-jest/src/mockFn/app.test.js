import * as app from "./app.js";
import * as math from "./math.js";

/**
 * Set all module functions to jest.fn
 * if no -> isMockFunction return false with all methods of math
 * Cannot access directly to original function
 */
jest.mock("./math.js");

test.skip("should be mock function", () => {
  console.log(jest.isMockFunction(math.add));
  console.log(jest.isMockFunction(app.doAdd));
  expect(jest.isMockFunction(math.add)).toBe(true);
});

test.skip("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test.skip("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

test("should a simple mock function", () => {
  const mockFn = jest.fn();

  const result = mockFn();

  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith();
  expect(result).toBeUndefined();
});

it("has been called with correct arguments and returns a correct value", () => {
  const mock = jest
    .fn()
    .mockReturnValueOnce("first return")
    .mockReturnValueOnce("second return");

  const resultFirst = mock("first call");
  const resultSecond = mock("second call");

  expect(resultFirst).toBe("first return");
  expect(resultSecond).toBe("second return");
  expect(mock).toHaveBeenCalledTimes(2);
  expect(mock).toHaveBeenNthCalledWith(1, "first call");
  expect(mock).toHaveBeenNthCalledWith(2, "second call");
});

describe("Mock callback function for custom forEach", () => {
  test("Mock callback", () => {
    const callbackFn = jest.fn((item) => item);

    app.myCustomedForEach([1, "thien", 3], callbackFn);
    console.log(callbackFn.mock.calls);
    expect(callbackFn).toHaveBeenCalledTimes(3);
    expect(callbackFn.mock.calls[1][0]).toBe("thien");
    expect(callbackFn.mock.results[0].value).toBe(1);
    /**
     *  [
          { type: 'return', value: 1 },
          { type: 'return', value: 'thien' },
          { type: 'return', value: 3 }
        ]
     */
  });
});
