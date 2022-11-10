const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("Test simple Num: 1234", () => {
    expect(addCommas("1234")).toEqual("1,234");
  });

  test("Test negative Num: -5678", () => {
    expect(addCommas("-5678")).toEqual("-5,678");
  });

  test("Test dot Num: -3141592.65", () => {
    expect(addCommas("-3141592.65")).toEqual("-3,141,592.65");
  });
});
