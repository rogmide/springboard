from doctest import FAIL_FAST
from flask import Flask, request, redirect, render_template
from models import db, connect_db

app = Flask(__name__)

# Connection to the database that you are going to be working
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///movies_example'
# This is going to go away in some future time so set it to false so is not annoying
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# basiclly is going to print the Query that we going to be sending to the DB
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "123"

connect_db(app)

@app.route('/')
def home_page():
    '''Show Home Page'''

    # we dont use this but better here than the console that will be lost
    movies = db.session.execute('SELECT * FROM movies')
    print(list(movies))  

    return render_template('home.html')