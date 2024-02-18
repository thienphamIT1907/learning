import axios from "axios";

const fetchUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  return response.data;
};

describe.skip("Test async function", () => {
  test("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1); // use this to check callback func is called at least 1 in async func
    return fetchUsers().then((data) => {
      expect(data.name).toBe("Leanne Graham");
    });
  });
});
