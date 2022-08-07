from forex_python.converter import CurrencyRates, CurrencyCodes, RatesNotAvailableError
from flask import Flask, request, render_template, redirect, flash, session, json
import datetime
import json


try:
    c = CurrencyCodes()
    # a = c.convert('UasdSD', 'USD', 100, datetime.date.today())
    # a = c.get_rates('USssdD')
    a = c.get_symbol('HKD')
    print(a)
except RatesNotAvailableError as error:
    print(error)
# else:
    # print("result is")
# finally:
    # print("executing finally clause")
