from forex_python.converter import CurrencyRates, RatesNotAvailableError
from flask import Flask, request, render_template, redirect, flash, session, json
import datetime


def convert_currency(c_from, c_to, c_amount):
    try:
        currency = CurrencyRates()
        result = currency.convert(c_from, c_to, int(
            c_amount), datetime.date.today())
        return result

    except:
        flash('Currency is not valid!')
        return None


def last_six_month_change(c_from, c_to, c_amount):

    try:
        result = []
        days = 30
        currency = CurrencyRates()

        for i in range(0, 6):
            result.append([currency.convert(c_from, c_to, int(c_amount), datetime.date.today(
            ) - datetime.timedelta(days)), datetime.date.today() - datetime.timedelta(days)])
            days += 30

        return result

    except:
        flash('Currency is not valid!')
        return None