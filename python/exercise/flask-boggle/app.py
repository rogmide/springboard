from crypt import methods
from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
import json
from boggle import Boggle
boggle_game = Boggle()

app = Flask(__name__)
app.config['SECRET_KEY'] = '123'
app.debug = True
toolbar = DebugToolbarExtension(app)


@app.route('/')
def get_home():
    session['board'] = Boggle().make_board()
    return render_template('board.html', board=session['board'])


@app.route('/check_word/<word>')
def check_for_word(word):

    is_a_word = Boggle().check_valid_word(session['board'], word)

    return {"result": is_a_word}


@app.route('/keep_score/', methods=['POST'])
def kepp_score_and_time_play():
    req = request.get_json('json_data')
    print(req['score'])
    print(req['time'])
    return {"result": 'something'}
