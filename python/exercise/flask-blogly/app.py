from crypt import methods
from flask import Flask, request, redirect, render_template
from models import User, db, connect_db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///users_exercise'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "123"

connect_db(app)
# db.create_all()


@app.route('/')
def home_page():
    '''Show Home Page'''

    return redirect('/users')


@app.route('/users')
def get_users_page():
    '''Show Users Page'''

    users = User.get_all_users()

    return render_template('users.html', users=users)


@app.route('/users/new')
def get_new_user_from():
    '''Get New User From Page'''

    return render_template('new_user.html')


@app.route('/users/new', methods=['POST'])
def add_user_to_db():
    '''Add a new user to the db'''

    print('FINISH WORK HERE FOR TOMORROW')
    return redirect('/users')


@app.route('/users/<int:id>')
def get_user_detail_page(id):
    '''Show User Details Page'''

    user = User.get_user_by_id(id)

    return render_template('user_details.html', user=user)
