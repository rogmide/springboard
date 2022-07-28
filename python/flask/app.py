from crypt import methods
from flask import Flask, request, render_template, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample

from importlib_metadata import method_cache

app = Flask(__name__)
app.config['SECRET_KEY'] = '123'
# This is for the redirect happen automatlic if is True you can use it for debug stuff
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)


@app.route('/')
def home_page():
    return render_template('home.html')


@app.route('/hello')
def say_hello():
    '''Show Hello Page'''
    return render_template('hello.html')


@app.route('/goodbye')
def say_bye():
    return render_template('goodbye.html')


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


# using variables to send to the html template
# that we can use like this <h1> {{variable here}} </h1> in the html
@app.route('/lucky')
def lucky_number():
    num = randint(1, 3)
    return render_template('lucky.html', lucky_num=num, msg='Your so Lucky!')


@app.route('/form')
def show_form():
    return render_template('form.html')


COMPLIMENTS = ['cool', 'clever', 'tenacious', 'awesome', 'Pythonic']


@app.route('/greet')
def get_greeting():
    nice_thing = choice(COMPLIMENTS)
    name = request.args['username']
    return render_template('greet.html', username=name, compliment=nice_thing)


@app.route('/spell/<word>')
def spell_word(word):
    return render_template('spell_word.html', word=word)


@app.route('/form-2')
def show_form2():
    return render_template('form_2.html')

# interesting method Get for dirctionary or list dont give error if the
# item that you looking for is not there


@app.route('/greet-2')
def get_greeting_2():
    name = request.args['username']
    wants_compliments = request.args.get(
        'wants_compliments')  # THIS IS IMPORTAN
    nice_things = sample(COMPLIMENTS, 3)
    return render_template('/greet-2.html', username=name, wants_compliments=wants_compliments,
                           compliments=nice_things)


@app.route('/old-home-page')
def redirect_old_page():
    '''Redirect to New Home Page'''
    flash('That Page Has Move! We have a new page!')
    return redirect('/')


MOVIES = {'Amadeus', 'Chicken Run', 'Dances With Wolves'}


@app.route('/movies')
def show_all_movies():
    '''Show list of all movies in fake DB'''
    return render_template('/movies.html', movies=MOVIES)

# Coming from a FOR in MOvies as a POST request
# we handle the POST request and then we redirected to the same place with new Data


@app.route('/movies/new', methods=['POST'])
def add_movie():
    title = request.form['title']
    # add to pretend DB
    if title in MOVIES:
        # flash('MESSAGES', 'CATEGORY')
        flash('Movie is Already Save', 'error')
    else:
        MOVIES.add(title)
        flash('Created Your Movie', 'success')

    return redirect('/movies')
