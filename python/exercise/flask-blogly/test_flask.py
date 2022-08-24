from unittest import TestCase
from app import app
from flask import session
from models import db, User, Post, PostTag, Tag

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///users_exercise_test'
app.config['SQLALCHEMY_ECHO'] = False

db.drop_all()
db.create_all()


class AppViewsTestCase(TestCase):
    '''Test some Route for the App'''

    def setUp(self):

        User.query.delete()

    def tearDown(self):
        """Clean up any fouled transaction."""

        db.session.rollback()

    def test_list_homepage(self):
        '''Test Home page is render properlly'''

        with app.test_client() as client:
            resp = client.get("/")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('Blogly Recent Posts', html)

    def test_get_user_pages(self):
        '''Test user page that the user is there'''

        user = User(first_name='Jon', middle_name="",
                    last_name='Smith', image_url=None)

        db.session.add(user)
        db.session.commit()

        with app.test_client() as client:
            resp = client.get("/users")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('Jon  Smith', html)

    def test_404_error(self):
        '''Test 404 Page'''

        with app.test_client() as client:
            resp = client.get("/asdfasdfagasdf22345234")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('404, Page Not Found', html)
