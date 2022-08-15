from crypt import methods
from curses import flash
from hashlib import new
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
def list_pets():
    '''Show list of all pet in db'''

    # we dont use this but better here than the console that will be lost
    # movies = db.session.execute('SELECT * FROM movies')
    # print(list(movies))

    # Create the Tables in the Db using the models
    # db.create_all()

    # ADDIN ADDIN ADDIN
    # stevie = Pet(name='Stevie Chicks', species='chicken', hunger=13)
    # rocket = Pet(name='rocket', species='mecha-chicken', hunger=1)
    # toadie = Pet(name='Ahri', species='Leeee', hunger=12)

    # # add multiple item at the same time using a list
    # db.session.add_all([stevie, rocket, toadie])

    # # add a signle item at the time
    # db.session.add(toadie)
    # db.session.commit()

    # try:
    #     problem_pet = Pet(name='rocket', species='dog')
    #     db.session.add(problem_pet)
    #     db.session.commit()
    # except:
    #     # rollback will clean the db.session
    #     db.session.rollback()
    #     print("SomeError")

    # UPDATE UPDATE UPDATE
    # toadie = Pet(name='Ahri', species='Leeee', hunger=12)
    # toadie.name = 'NewName-Ahri2'
    # db.session.add(toadie)
    # db.session.commit()
    # print(toadie.name)

    # toadie.name = 'anotherAhri'
    # db.session.add(toadie)
    # db.session.commit()

    # oadie = Pet(name='oadie', species='Leeee', hunger=12)
    # db.session.add(oadie)
    # db.session.commit()
    # print(oadie)
    # # <Pet id=27 name=oadie species=Leeee hunger=12>

    # pet_list = Pet.query.all()
    # get(id) what is inside is the id
    # pet = Pet.query.get(7)
    # # filter_by(One or Many Args filter items)
    # select_where = Pet.query.filter_by(hunger=1).all()
    # select_where = Pet.query.filter_by(hunger=1).first()

    # DELETE DELETE DELETE
    # select_where = Pet.query.filter_by(hunger=1).delete()
    # db.session.add(select_where)
    # db.session.commit()

    pets = Pet.query.all()
    return render_template('list.html', pets=pets)


@app.route('/<int:pet_id>')
def show_pet(pet_id):
    '''Show detail about a single pet'''

    pet = Pet.query.get_or_404(pet_id)
    return render_template('details.html', pet=pet)


@app.route('/', methods=['POST'])
def create_pets():
    name = request.form['name']
    species = request.form['species']
    hunger = request.form['hunger']
    hunger = int(hunger) if hunger else None

    new_pet = Pet(name=name, species=species, hunger=hunger)
    db.session.add(new_pet)
    db.session.commit()

    return redirect(f'/{new_pet.id}')


@app.route('/species/<species_id>')
def show_pets_by_species(species_id):
    pets = Pet.get_by_species(species_id)
    return render_template('species.html', pets=pets, species=species_id)
