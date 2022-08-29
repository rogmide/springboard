from unittest import TestCase

from app import app
from models import db, Todo

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///todos_db_test'
app.config['SQLALCHEMY_ECHO'] = False

db.drop_all()
db.create_all()


class TodoViewTestCase(TestCase):
    '''Test for view about Todos'''

    def setUp(self):
        '''Crea a demo data to test'''

        Todo.query.delete()
        db.session.commit()

        todo = Todo(title='Testing This', done=False)
        db.session.add(todo)
        db.session.commit()

        self.todo_id = todo.id

    def tearDown(self):
        '''Clean up fouled transactions'''

        db.session.rollback()

    def test_all_todo(self):
        '''Test get all todo from the db'''

        with app.test_client() as client:
            resp = client.get("/api/todos")

            self.assertEqual(resp.status_code, 200)
            self.assertEqual(resp.json, {
                "todo": [
                    {
                        "done": False,
                        "id": self.todo_id,
                        "title": "Testing This"
                    }
                ]
            })

    def test_create_todo(self):
        '''Test create dodo in db'''

        with app.test_client() as client:
            resp = client.post(
                "/api/todos", json={
                    "title": "TodoTest",
                    "done": False
                })

            self.assertIsInstance(resp.json['todo']['id'], int)
            # del resp.json['todo']['id']

            self.assertEqual(resp.status_code, 201)
            self.assertEqual(resp.json, {
                "todo": {
                    "done": False,
                    'id': 3,
                    "title": "TodoTest"
                }
            })
