import requests

BASE_URL = 'https://itunes.apple.com/search'
params = {'term': 'Jack Johnson', 'Limit': 5}

res = requests.get(BASE_URL, params=params)

data = res.json()

for result in data['results']:
    print(result['trackName'], 'by', result['artistName'])
