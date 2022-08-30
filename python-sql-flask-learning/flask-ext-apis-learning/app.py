import requests
from hidden_stuff import API_SECRET_KEY
from flask import Flask, redirect, render_template, flash, request, jsonify
from models import db, connect_db, Todo, serialice


API_BASE_URL = 'http://www.mapquestapi.com/geocoding/v1'

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///todos_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['SECRET_KEY'] = "123"

connect_db(app)

# ================================================================================================
# THIS IS REQUEST FROM API EXERCISE
# ================================================================================================

# def get_coords(address):
#     '''Get coords from a address'''

#     res = requests.get(f'{API_BASE_URL}/address',
#                        params={'key': API_SECRET_KEY, 'location': address})

#     data = res.json()

#     lat = data['results'][0]['locations'][0]['latLng']['lat']
#     lng = data['results'][0]['locations'][0]['latLng']['lng']

#     coords = {'lat': lat, 'lng': lng}

#     return coords


# @app.route('/')
# def show_address_form():
#     '''Show form to enter address'''

#     return render_template('address_form.html')


# @app.route('/geocode')
# def get_location():
#     '''Get addres form the API'''

#     address = request.args['address']

#     coords = get_coords(address)

#     return render_template('address_form.html', coords=coords)


# ================================================================================================
# THIS IS THE NEXT EXERCISE TO LOOK AT
# ================================================================================================

@app.route('/')
def index_page():
    '''Show the index page'''

    todos = Todo.query.all()

    return render_template('index.html', todos=todos)

@app.route('/api/todos')
def list_todos():
    '''Show all Todos from the db'''

    all_todos = [serialice(t) for t in Todo.query.all()]

    return jsonify(todo=all_todos)


@app.route('/api/todos/<int:id>')
def get_todo(id):
    '''Show all Todos from the db'''

    todo = Todo.query.get_or_404(id)

    return jsonify(todo=serialice(todo))


@app.route('/api/todos', methods=['POST'])
def create_todo():
    '''Create a todo and add it to the db'''

    new_todo = Todo(title=request.json['title'])
    db.session.add(new_todo)
    db.session.commit()

    return (jsonify(todo=serialice(new_todo)), 201)


@app.route('/api/todos/<int:id>', methods=['PATCH'])
def update_todo(id):
    '''Update de todo in the db'''

    todo = Todo.query.get_or_404(id)

    # This way all be updated if the user pass the right json that the API is asking for
    # db.session.query(Todo).filter_by(id=id).update(request.json)

    todo.title = request.json.get('title', todo.title)
    todo.done = request.json.get('done', todo.done)
    db.session.commit()

    return (jsonify(todo=serialice(todo)), 200)


@app.route('/api/todos/<int:id>', methods=['DELETE'])
def delete_todo(id):
    '''Update de todo in the db'''

    todo = Todo.query.get_or_404(id)
    db.session.delete(todo)
    db.session.commit()

    return (jsonify(delete=f'Todo-id: {id} deleted'), 200)
