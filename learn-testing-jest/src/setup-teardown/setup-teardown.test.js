const initDatabase = () => console.log("Init database...");
const closeDatabase = () => console.log("Close database...");

describe.skip("test suite with teardown", () => {
  beforeAll(() => console.log("run beforeAll..."));
  afterAll(() => console.log("run afterAll..."));

  beforeEach(() => initDatabase()); // Run before start every test case
  afterEach(() => closeDatabase()); // Run after test case is done
  test("Run testcase 1", () => {
    console.log("Running test case 1...");
  });

  test("Run testcase 2", () => {
    console.log("Running test case2...");
  });

  test("Run testcase 3", () => {
    console.log("Running test case 3...");
  });
});

describe.skip("Another test suite", () => {
  test('Another test case', () => {
    console.log('run other test case to test before after scope!')
  })
})
