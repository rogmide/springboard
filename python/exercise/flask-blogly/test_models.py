from unittest import TestCase
from app import app
from flask import session
from models import db, User, Post, PostTag, Tag

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///users_exercise_test'
app.config['SQLALCHEMY_ECHO'] = False

db.drop_all()
db.create_all()


class UserModelTestCase(TestCase):
    '''Test for model Users'''

    def setUp(self):
        """Clean up any existing users."""

        User.query.delete()

    def tearDown(self):
        """Clean up any fouled transaction."""

        db.session.rollback()

    def test_get_all_users(self):
        '''Test get all user from db'''

        user1 = User(first_name='User1', last_name='LabRat1')
        user2 = User(first_name='User2', last_name='LabRat2')
        user3 = User(first_name='User3', last_name='LabRat3')

        db.session.add_all([user1, user2, user3])
        db.session.commit()

        users = User.get_all_users()
        self.assertEqual(len(users), 3)

    def test_get_user_by_id(self):
        '''Test that gets the user by the id'''

        user1 = User(first_name='Jon', last_name='Labby')
        db.session.add(user1)
        db.session.commit()

        user = User.get_user_by_id(user1.id)
        self.assertEqual(user.first_name, 'Jon')


class PostModelTestCase(TestCase):
    '''Test for model Users'''

    def setUp(self):
        """Clean up any existing users."""

        User.query.delete()
        Post.query.delete()

    def tearDown(self):
        """Clean up any fouled transaction."""

        db.session.rollback()

    def test_get_post_by_id(self):
        '''Test getting post by id'''

        jon = User(first_name='Jon', middle_name="",
                   last_name='Smith', image_url=None)

        post1 = Post(title='Consectetur',
                     content='Aliquet eget sit amet tellus cras adipiscing enim eu turpis.', user_id=jon.id)

        db.session.add_all([jon, post1])
        db.session.commit()

        post = Post.get_post_by_id(post1.id)
        self.assertEqual(post.title, 'Consectetur')

    def test_get_all_post(self):
        '''Test getting all post from db'''

        jon = User(first_name='Jon', middle_name="",
                   last_name='Smith', image_url=None)
        post1 = Post(title='Consectetur',
                     content='Aliquet eget sit amet tellus cras adipiscing enim eu turpis.', user_id=jon.id)
        post2 = Post(title='Agus',
                     content='Aliquet eget sit amet tellus cras.', user_id=jon.id)

        db.session.add_all([jon, post1, post2])
        db.session.commit()

        posts = Post.get_all_post()
        self.assertEqual(len(posts), 2)


class TagModelTestCase(TestCase):
    '''Tes Tag model'''

    def setUp(self):
        """Clean up any existing users."""

        Tag.query.delete()

    def tearDown(self):
        """Clean up any fouled transaction."""

        db.session.rollback()

    def test_get_tag_by_id(self):
        '''Test getting a tag by id'''

        tag1 = Tag(tag_name='Fun')
        db.session.add(tag1)
        db.session.commit()

        tag = Tag.get_tag_by_id(tag1.id)
        self.assertEqual(tag.tag_name, 'Fun')
