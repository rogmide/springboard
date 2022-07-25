# you need to add the next 2 line all the time for using flask
from flask import Flask, request, render_template
from random import randint, choice, sample
app = Flask(__name__)

@app.route('/')
def get_home():
    return render_template('home.html')