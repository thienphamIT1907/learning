describe.skip("Mock Implementation", () => {
  test("Define mock function 1", () => {
    const mockFn = jest.fn(() => "Hello Jest");
    const result = mockFn();
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveReturnedWith("Hello Jest");
    expect(result).toBe("Hello Jest");
  });

  test("Define mock function 2", () => {
    const mock = jest.fn((param) => "bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });

  test("Mock implementation one time", () => {
    const mock = jest
      .fn()
      .mockName('printMyName')
      .mockImplementationOnce(() => "pham")
      .mockImplementationOnce(() => "anh")
      .mockImplementationOnce(() => "thien")
      .mockImplementation(() => "final") //  skipped
      .mockImplementation(() => "final 2"); // execute last mockImplementation

    const result1 = mock();
    const result2 = mock();
    const result3 = mock();
    const result4 = mock();
    const result5 = mock();

    // console.log(result1, result2, result3, result4, result5);

    expect(result1).toBe("pham");
    expect(result2).toBe("anh");
    expect(result3).toBe("thien");
    expect(result4).toBe("final 2");
    expect(result5).toBe("final 2");

    expect(mock).toHaveBeenCalled(); // Output: expect(printMyName).not.toHaveBeenCalled()
    expect(mock).toHaveBeenCalledTimes(5);
  });

  test('Mock function return value', () => {
    const mockFn = jest.fn();
    mockFn.mockReturnValue({ name: 'pat'})
    const result = mockFn();

    expect(mockFn).toHaveBeenCalled();
    expect(result).toEqual({ name: 'pat'})
  })
});
