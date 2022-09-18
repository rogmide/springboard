// #################################################
// describe IS USER TO GROUP ALL THE TEST AS NEEDED
describe("- Test Matchers - ", function () {
  // #################################################
  // SETUP VARIABLES OUTSIDE SCOOPE TO USER IN THE TEST
  let variable_to_use = "";

  // #################################################
  // beforeEach WILL RUN BEFORE EACH TEST
  beforeEach(function () {
    console.log("BEFORE");
    variable_to_use = "123";
  });

  // #################################################
  // afterEach WILL RUN AFTER EACH TEST
  afterEach(function () {
    console.log("AFTER");
    variable_to_use = "";
  });
  // #################################################
  // beforeAll WILL RUN BEFORE ALL THE TEST 1 TIME RUN
  beforeAll(() => {
    console.log("Before All");
  });

  // #################################################
  // afterAll WILL RUN AFTER ALL THE TEST ARE DONE
  afterAll(() => {
    console.log("AfterAll");
  });

  test("Compare toBe and toEqual", function () {
    const nums = [3, 4, 5];
    const copy = [...nums];
    const nums2 = nums;

    expect(copy).toEqual(nums);
    expect(variable_to_use).toEqual("123");
    expect(nums2).toBe(nums);
  });

  test("Playing with toContain matcher", function () {
    const colors = ["red", "orange"];
    expect(colors).toContain("red");
    expect("hello").toContain("ello");
  });

  test("Playing with Any", function () {
    const randNum = Math.random * 6;
    expect(randNum).toEqual(expect.any(Number));
    expect("asjdakjsgd").toEqual(expect.any(String));
  });

  test("Playing with Not", function () {
    const numLives = 9;
    expect(numLives).not.toEqual(0);
  });
});
