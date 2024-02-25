import { render } from "@testing-library/react";
import App from "./App";

describe("First test suite", () => {
  test("should success test case", () => {
    expect(true).toBe(true);
    const { getByText } = render(<App />);
    expect(getByText("Vite + React")).toBeInTheDocument();
  });
});
