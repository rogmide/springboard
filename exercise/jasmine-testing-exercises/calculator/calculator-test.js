
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 130000,
    years: 10,
    rate: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual('1443.27');
});


it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 23333,
    years: 6,
    rate: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual('386.70');
});