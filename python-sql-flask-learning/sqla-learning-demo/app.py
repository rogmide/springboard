from flask import Flask, request, redirect, render_template
from models import db, connect_db, Pet

app = Flask(__name__)

# Connection to the database that you are going to be working
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pet_shop_db'
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
    # movies = db.session.execute('SELECT * FROM movies')
    # print(list(movies))

    # Create the Tables in the Db using the models
    # db.create_all()

    # stevie = Pet(name='Stevie Chicks', species='chicken', hunger=13)
    # rocket = Pet(name='rocket', species='mecha-chicken', hunger=1)
    # toadie = Pet(name='toadie', species='bio-chicken', hunger=12)

    # # add multiple item at the same time using a list
    # db.session.add_all([stevie, rocket, toadie])

    # # add a signle item at the time
    # db.session.add(stevie)
    # db.session.commit()

    return render_template('home.html')