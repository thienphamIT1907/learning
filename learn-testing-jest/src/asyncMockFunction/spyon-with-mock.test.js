import axios from "axios";

jest.mock("axios");

test("Mock function using jest.mock()", () => {
  console.log({axi: axios.get.getMockImplementation()});
});

test("Mock function using jest.spyOn", () => {
  const mockAxios = jest.spyOn(axios, "get");
  
  console.log({mockAxios: mockAxios.getMockImplementation()})
});
