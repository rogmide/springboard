const { square } = require("./square");
const { cube } = require("./square");

// #######################################################
// GROUP TEST TOGETHER WITH DESCRIBE
describe("- Square Funtion - ", function () {
  test("Square Should be a number", function () {
    const res = square(3);
    expect(res).toEqual(9);
  });

  test("Square Should square negative numbers", function () {
    const num = square(-9);
    expect(num).toEqual(81);
  });
});

// #######################################################
// GROUP TEST TOGETHER WITH DESCRIBE
describe("- Cube Funtion - ", function () {
  test("Cube Should be a + number", function () {
    const num = cube(3);
    expect(num).toEqual(27);
  });
});
