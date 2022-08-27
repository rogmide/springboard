from crypt import methods
from unicodedata import name
from flask import Flask, request, redirect, render_template, flash
from models import db, connect_db, Pet
from forms import AddPetForm

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pet_adoption_agency'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "123"

connect_db(app)


@app.route('/')
def home_page():
    '''Show Home Page'''

    pets = Pet.get_all_pets()

    return render_template('home.html', pets=pets)


@app.route('/add', methods=['GET', 'POST'])
def add_pet():

    pet_form = AddPetForm()

    if pet_form.validate_on_submit():
        name = pet_form.name.data
        species = pet_form.species.data
        photo_url = pet_form.photo_url.data if pet_form.photo_url.data else None
        age = pet_form.age.data
        notes = pet_form.notes.data

        new_pet = Pet(name=name, species=species,
                      photo_url=photo_url, age=age, notes=notes)
        db.session.add(new_pet)
        db.session.commit()

        flash('A new pet is added to the agency')

        return redirect('/')
    else:
        return render_template('pet_add.html', pet_form=pet_form)
