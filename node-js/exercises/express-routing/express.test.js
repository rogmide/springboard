const { op_mean, op_median, op_mode } = require("./express");

describe("- Test express.js - ", function () {
  test("- Test OP_MEAN", function () {
    expect(op_mean("3,11,4,6,8,9,6").toFixed(1)).toEqual("6.7");
  });

  test("- Test OP_MEDIAN ODD NUMBERS", function () {
    expect(op_median("5,9,11,9,7")).toEqual("9");
  });

  test("- Test OP_MEDIAN EVEN NUMBERS", function () {
    expect(op_median("1,2,2,4,5,7")).toEqual(3);
  });
  test("- Test OP_MODE", function () {
    expect(op_median("2, 3, 6, 3, 7, 5, 1, 2, 3, 9")).toEqual(3);
  });
});
