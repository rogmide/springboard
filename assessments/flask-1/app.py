from forex_python.converter import CurrencyRates
from flask import Flask, request, render_template, redirect, flash, session, json
import datetime
import json

app = Flask(__name__)
app.config['SECRET_KEY'] = '123'
app.debug = True
app.config['TESTING'] = True

# c = CurrencyRates()
# print(c.get_rates('USD', datetime.date.today()))


@app.route('/')
def get_home():
    return render_template('home.html')


@app.route('/converter')
def get_converter():
    return render_template('converter.html')

# @app.route('')
