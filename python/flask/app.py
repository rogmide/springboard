# you need to add the next 2 line all the time for using flask
from flask import Flask
app = Flask(__name__)


@app.route('/')
def home_page():
    html = '''
    <html>
        <body>
            <h1>
                This is HomePage!
            </h1>
            <p>
                Work Still in Progress!
            </p>
        </body>
    <html>
    '''
    return html


@app.route('/hello')
def say_hello():
    return 'Say Hello'

@app.route('/goodbye')
def say_bye():
    return 'Good Bye'

@app.route('/html')
def real_html():
    html = '''
    <html>
        <body>
            <h1>
                Hello!
            </h1>
            <p>
                This is the hello Page!
            </p>
        </body>
    <html>
    '''
    return html