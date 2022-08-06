from forex_python.converter import CurrencyRates, RatesNotAvailableError
from flask import Flask, request, render_template, redirect, flash, session, json
import datetime
import json


try:
    c = CurrencyRates()
    a = c.convert('USD', 'USD', 100, datetime.date.today())
    print(a)
except:
    print("here")
# else:
    # print("result is")
# finally:
    # print("executing finally clause")
