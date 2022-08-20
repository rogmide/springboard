from flask import Flask, request, redirect, render_template
from models import Department, Employee, db, connect_db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///employees_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "123"

connect_db(app)


@app.route('/')
def home_page():
    '''Show Home Page'''

    # db.drop_all()
    # db.create_all()

    #  Testing
    # d = Department(dept_code='lgl', dept_name='legal',
    #                dept_phone='123-4567')

    # e = Employee(name='Bod Bobbins', state='AK', dept_code='lgl')

    # db.session.add(e)
    # db.session.commit()

    return render_template('home.html')
