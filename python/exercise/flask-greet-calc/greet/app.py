from flask import Flask, request

app = Flask(__name__)

# greet app


@app.route('/welcome')
def say_welcome():
    return 'welcome'


@app.route('/welcome/home')
def say_home():
    return 'welcome home'


@app.route('/welcome/back')
def say_back():
    return 'welcome back'
