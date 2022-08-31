from pydoc import importfile
from flask import Flask, request, redirect, render_template
from models import User, db, connect_db
from forms import RegisterForm
from flask_bcrypt import Bcrypt

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///user_auth'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "123"

connect_db(app)


@app.route('/')
def home_page():
    '''Show Home Page'''

    # # Work factor is the time that the encryption is going to take to generate the hash
    # # Random string that is going to be addeed to our password
    # salt = bcrypt.gensalt()
    # # Password hash need to add b'password for some reason'
    # user_pws = b'pws123'
    # pws = bcrypt.hashpw(user_pws, salt)

    # Initialize
    # bcrypt = Bcrypt()

    # user_pws = bcrypt.generate_password_hash("pws123")
    # print('===========', user_pws)
    # isOwner = bcrypt.check_password_hash(user_pws, 'asdfasdfa')
    # print('===========', isOwner)

    return render_template('home.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    '''Register a User in to the app'''

    form = RegisterForm()

    if form.validate_on_submit():

        name = form.username.data
        pwd = form.password.data

        user = User.register(name, pwd)
        db.session.add(user)
        db.session.commit()

        return redirect('/')
    else:

        return render_template('register.html', user_regi=form)
