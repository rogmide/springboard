from forex_python.converter import CurrencyRates, RatesNotAvailableError
from flask import Flask, request, render_template, redirect, flash, session, json
import datetime
import json
import app


def convert_currency(c_from, c_to, c_amount):
    try:
        currency = CurrencyRates()
        result = currency.convert(c_from, c_to, int(
            c_amount), datetime.date.today())
        return result

    except:
        flash('Currency is not valid!')
        return None