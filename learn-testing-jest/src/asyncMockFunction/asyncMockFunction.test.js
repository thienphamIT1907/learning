import mockAxios from "axios"; // it's mock function because we are using jest.mock() below
import fetchData from "./index.js";

jest.mock("axios"); // after this line, axios inside fetchData become mock function

describe("Test async function", () => {
  test("Using api to return a name", async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          name: "Leanne Graham",
        },
      })
    );

    const result = await fetchData();
    expect(result.data.name).toBe("Leanne Graham");
  });
});
