from forex_python.converter import CurrencyRates, RatesNotAvailableError
from flask import Flask, request, render_template, redirect, flash, session, json
import datetime
import json


try:
    c = CurrencyRates()
    a = c.convert('UasdSD', 'USD', 100, datetime.date.today())
    # a = c.get_rates('USssdD')
    print(a)
except RatesNotAvailableError as error:
    print(error)
# else:
    # print("result is")
# finally:
    # print("executing finally clause")
