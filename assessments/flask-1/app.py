from forex_python.converter import CurrencyRates, RatesNotAvailableError
from flask import Flask, request, render_template, redirect, flash, session, json
import datetime
import json
from currency import convert_currency, last_six_month_change

app = Flask(__name__)
app.config['SECRET_KEY'] = '123'
app.debug = True
app.config['TESTING'] = True


# c = CurrencyRates()
# print(c.get_rates('USD', datetime.date.today()))


@app.route('/')
def get_home():
    '''Display the Home Page'''

    return render_template('home.html')


@app.route('/converter')
def get_converter():
    '''Display the Converter Form'''

    return render_template('converter.html')


@app.route('/conversions')
def get_conversions_result():
    '''
    Redirect if the currency is not valid
    or
    Do a corrency convertion and render the result page to show

    Variable:
        c_from: currency to convert from
        c_to: currency to convert to
        c_amount: amount of currency to convert
    '''

    c_from = request.args.get('from', '')
    c_to = request.args.get('to', '')
    c_amount = request.args.get('amount', 100)

    result = convert_currency(c_from, c_to, c_amount)
    result_six_month = last_six_month_change(c_from, c_to, c_amount)

    if result is None:
        return redirect('/converter')

    date = datetime.date.today()
    return render_template('conversions.html', c_from=c_from, c_to=c_to, c_amount=c_amount, result=round(result, 2), result_six_month=result_six_month, date=date.strftime("%b %d %Y"))
