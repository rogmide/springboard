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
    '''
    The initial start of the website where the game board is made for first time
    '''
    # reseting score for testing
    # session['higher_score'] = 0
    session['board'] = Boggle().make_board()
    return render_template('board.html', board=session['board'])


@app.route('/check_word/<word>')
def check_for_word(word):
    '''
    Get a word and using that work will check is the word is on the word file
    using the class Boggle that is imported  
    '''

    is_a_word = Boggle().check_valid_word(session['board'], word)

    return {"result": is_a_word}


@app.route('/keep_score/', methods=['POST'])
def kepp_score_and_time_play():
    '''
    Get the score that are in the from end, make sure that if the score is higher than before
    will store the new score in a session, returning the new higher score or the same score
    that was there before
    '''
    req = request.get_json('json_data')

    session['higher_score'] = session.get('higher_score', 0)

    if int(req['score']) > int(session['higher_score']):
        session['higher_score'] = req['score']
        session['time_takes'] = req['time']
        return {"higher_score": session['higher_score'], "time_take": session['time_takes'], 'result': 'new'}

    return {"result": 'Same', "higher_score": session['higher_score']}
