# you need to add the next 2 line all the time for using flask
from crypt import methods
import re
from flask import Flask, request
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


# Basiclly this is a GET request
@app.route('/search')
def search():
    # no error handeling here so will blowup
    term = request.args['term']
    soft = request.args['soft']
    # we user the argument that we get with the request to
    # do stuff in the DB or somewhere else
    return f'<h1>Search Result For: {term} : {soft}</h1>'

# @app.route('/post', methods=['POST'])
# def post_demo():
#     return 'you made a POST request'

# @app.route('/post', methods=['GET'])
# def get_demo():
#     return 'you made a GET request'


@app.route('/add-comment')
def add_comment_form():
    '''show form for addding a comment'''

    return '''
    <h1>Add Comment</h1>
    <form method="POST">
        <input type='text' placeholder='comment' name='comment'>
        <input type='text' placeholder='username' name='username'>
        <button>Submit</button>
    </form>
    '''
@app.route('/add-comment', methods=['POST'])
def save_comment():
    comment = request.form['comment']
    username = request.form['username']
    return f'''
    <h1>Your Comment are Save</h1>
    <ul>
        <li>
            Username: {username}
        </li>
        <li>
            Comment: {comment}
        </li>

    </ul>
    '''

POSTS = {
    1: 'like chicken',
    2: 'mayo is nice',
    3: 'Yolo',
    4: 'Nice Stuff'
}

@app.route('/posts/<int:id>')
def find_post(id):
    post = POSTS.get(id, 'is not there sorry')
    return f'<p>{post}</p>'