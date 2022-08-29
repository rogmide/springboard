from models import db, connect_db, Todo
from app import app

db.drop_all()
db.create_all()

todos = [
    Todo(title='Feed the Chickens'),
    Todo(title='Water Something'),
    Todo(title='Wash Diches', done=True),
    Todo(title='Workout Today', done=True),
    Todo(title='Something funny here (something)'),
]

db.session.add_all(todos)
db.session.commit()