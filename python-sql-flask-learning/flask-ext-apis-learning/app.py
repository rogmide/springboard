import requests
from hidden_stuff import API_SECRET_KEY
from flask import Flask, redirect, render_template, flash, request
from models import db, connect_db


API_BASE_URL = 'http://www.mapquestapi.com/geocoding/v1'

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///library'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['SECRET_KEY'] = "123"

connect_db(app)


def get_coords(address):
    '''Get coords from a address'''

    res = requests.get(f'{API_BASE_URL}/address',
                       params={'key': API_SECRET_KEY, 'location': address})

    data = res.json()

    lat = data['results'][0]['locations'][0]['latLng']['lat']
    lng = data['results'][0]['locations'][0]['latLng']['lng']

    coords = {'lat': lat, 'lng': lng}

    return coords


@app.route('/')
def show_address_form():
    '''Show form to enter address'''

    return render_template('address_form.html')


@app.route('/geocode')
def get_location():
    '''Get addres form the API'''

    address = request.args['address']

    coords = get_coords(address)

    return render_template('address_form.html', coords=coords)
