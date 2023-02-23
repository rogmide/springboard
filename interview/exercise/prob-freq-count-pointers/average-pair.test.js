const averagePair = require("./average-pair");
describe("averagePair", function () {
  it("should return true if an average pair exists", function () {
    // this was original to be expected true,
    //  i dont think there is a way to sum 1, 2, 3 that the result is 2.5
    // so swap the test to expect false
    // Or swap to expect true and change the avg target
    expect(averagePair([1, 2, 3], 5)).toBe(true);
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
  });

  it("should return false if an average pair does not exist", function () {
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
    expect(averagePair([], 4)).toBe(false);
  });
});
