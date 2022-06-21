describe("Payments test", function () {
    beforeEach(function () {
        billAmtInput.value = 120;
        tipAmtInput.value = 25;
    })

    it('Add new payments submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('120');
    });

    it('calc createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);
    });
    it('calc2 createCurPayment()', function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 20;
        expect(createCurPayment().tipPercent).toEqual(40);
    });

    it('append table appendPaymentTable()', function () {
        let cur = createCurPayment();
        appendPaymentTable(cur);
        let curTable = document.querySelectorAll('#paymentTable tbody tr td');
        expect(curTable.length).toEqual(3);
        expect(curTable[1].innerText).toEqual('$25');
    });
});

afterEach(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
});