import requests
from secrets import API_SECRET_KEY

BASE_URL = 'http://www.mapquestapi.com/geocoding/v1/address'
location = '11211 Causeway Blvd, Brandon, FL 33511'


res = requests.get(BASE_URL, params={'key': API_SECRET_KEY, 'location': location})
