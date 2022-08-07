from ast import Try
from forex_python.converter import CurrencyRates, CurrencyCodes
from flask import Flask, request, render_template, redirect, flash, session, json, jsonify
import datetime


def convert_currency(c_from, c_to, c_amount):
    '''
    Get the current currency change from one to another one
    '''
    try:
        currency = CurrencyRates()
        result = currency.convert(c_from, c_to, int(
            c_amount), datetime.date.today())
        return result

    except:
        flash('Currency is not valid!')
        return None


def last_six_month_change(c_from, c_to, c_amount):
    '''Get the last 180 days of the currency change and return a json'''

    try:
        result = []
        days = 30
        currency = CurrencyRates()
        json_result = {}

        for i in range(0, 6):
            result.append([currency.convert(c_from, c_to, 50, datetime.date.today(
            ) - datetime.timedelta(days)), datetime.date.today() - datetime.timedelta(days)])
            days += 30

        for i in range(0, 6):
            result[i][1] = result[i][1].strftime("%b %d %Y")
            result[i][0] = round(result[i][0], 2)

            json_result[i] = [result[i][1], result[i][0]]

        codes = get_currency_symbol(c_from, c_to)

        json_result[6] = [c_from, codes[0]]
        json_result[7] = [c_to, codes[1]]

        return json.dumps(json_result)

    except:
        flash('Currency is not valid!')
        return None


def get_currency_symbol(c_from, c_to):
    '''Get the symbol for the currency that are in use'''

    try:
        c_code = CurrencyCodes()
        cur_from = c_code.get_symbol(c_from)
        cur_to = c_code.get_symbol(c_to)

        return [cur_from, cur_to]

    except:
        flash('Currency is not valid!')
        return None
