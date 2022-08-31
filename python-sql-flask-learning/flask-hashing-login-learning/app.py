from flask import Flask, request, redirect, render_template
from models import db, connect_db
from forms import RegisterForm

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///movies_example'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "123"

connect_db(app)


@app.route('/')
def home_page():
    '''Show Home Page'''

    return render_template('home.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    '''Register a User in to the app'''

    user_regi = RegisterForm()

    return render_template('register.html', user_regi=user_regi)
