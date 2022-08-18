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
def get_new_user_form():
    '''Get New User From Page'''

    return render_template('new_user.html')


@app.route('/users/new', methods=['POST'])
def add_user_to_db():
    '''Add a new user to the db'''

    first_name = request.form["first_name"]
    last_name = request.form['last_name']
    img_user = request.form['img_user']

    new_user = User(first_name=first_name,
                    last_name=last_name, image_url=img_user if img_user else None)

    db.session.add(new_user)
    db.session.commit()

    return redirect('/users')


@app.route('/users/<int:id>')
def get_user_detail_page(id):
    '''Show User Details Page'''

    user = User.get_user_by_id(id)

    return render_template('user_details.html', user=user)


@app.route('/users/<int:id>/edit')
def get_edit_user_form(id):
    '''Show Form to change User Information that can be Edit'''

    user = User.get_user_by_id(id)

    return render_template('edit_user.html', user=user)


@app.route('/users/<int:id>/edit', methods=['POST'])
def edit_user_in_db(id):
    '''Edit a user information in the database'''

    user = User.get_user_by_id(id)

    user.first_name = request.form["first_name"]
    user.last_name = request.form['last_name']
    user.image_url = request.form['img_user'] if request.form['img_user'] else None

    db.session.add(user)
    db.session.commit()

    return redirect(f'/users')


@app.route('/users/<int:id>/delete', methods=['POST'])
def delete_user_db(id):
    '''Delete a user on the database usin a id'''

    User.query.filter(User.id == int(id)).delete()

    db.session.commit()

    return redirect(f'/users') 
