describe("helpers Testing", function () {
    beforeEach(function () {
        billAmtInput.value = 90;
        tipAmtInput.value = 30;
        submitPaymentInfo();
    })

    it('Total sumPaymentTotal()', function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 50;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(190);
    });

});

it('Should calculate % calculateTipPercent()', function () {
    expect(calculateTipPercent(100, 20)).toEqual(20);
});


it('Should Create new Table appendTd(tr, value)', function () {
    let tr = document.createElement('tr');
    appendTd(tr, 'table');
    expect(tr.children.length).toEqual(1);
    expect(tr.firstChild.innerHTML).toEqual('table');
});

afterEach(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
});
