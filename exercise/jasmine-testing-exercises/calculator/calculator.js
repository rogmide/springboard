let loan = document.querySelector('#loan-amount');
let year = document.querySelector('#loan-years');
let rate = document.querySelector('#loan-rate');
const form = document.querySelector('#calc-submit');
const mPayment = document.querySelector('#monthly-payment');

const values = {
  amount: 25000,
  years: 6,
  rate: 6.8
};

setupIntialValues();

form.addEventListener('click', function (e) {
  update();
});

function setupIntialValues() {
  loan.value = values.amount;
  year.value = values.years;
  rate.value = values.rate;
  mPayment.innerText = "$" + calculateMonthlyPayment(getCurrentUIValues());
}

function update() {
  mPayment.innerText = "$" + calculateMonthlyPayment(getCurrentUIValues());
}

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function calculateMonthlyPayment(value) {
  let i = value.rate / 100 / 12;
  let pow = 1 - Math.pow(1 + i, -(value.years) * 12);
  return (((value.amount) * i) / pow).toFixed(2);
}