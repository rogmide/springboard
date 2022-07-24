# Put your app in here.
from flask import Flask, request
import operations

app = Flask(__name__)


@app.route('/add')
def do_add():
    '''
    Run the type of operation with the number that it pass
    '''
    a = request.args['a']
    b = request.args['b']

    return f'''
    <h1>Result: {operations.add(int(a), int(b))}</h1>
    '''


@app.route('/sub')
def do_sub():
    '''
    Run the type of operation with the number that it pass
    '''
    a = request.args['a']
    b = request.args['b']

    return f'''
    <h1>Result: {operations.sub(int(a), int(b))}</h1>
    '''


@app.route('/mult')
def do_mult():
    '''
    Run the type of operation with the number that it pass
    '''
    a = request.args['a']
    b = request.args['b']

    return f'''
    <h1>Result: {operations.mult(int(a), int(b))}</h1>
    '''


@app.route('/div')
def do_div():
    '''
    Run the type of operation with the number that it pass
    '''
    a = request.args['a']
    b = request.args['b']

    return f'''
    <h1>Result: {operations.div(int(a), int(b))}</h1>
    '''


@app.route('/math/<ope>')
def do_all_math(ope):

    a = request.args['a']
    b = request.args['b']

    if ope == 'add':
        return f'''<h1>Result For {ope}: {operations.add(int(a), int(b))}</h1>'''
    if ope == 'sub':
        return f'''<h1>Result For {ope}: {operations.sub(int(a), int(b))}</h1>'''
    if ope == 'mult':
        return f'''<h1>Result For {ope}: {operations.mult(int(a), int(b))}</h1>'''
    if ope == 'div':
        return f'''<h1>Result For {ope}: {operations.div(int(a), int(b))}</h1>'''
