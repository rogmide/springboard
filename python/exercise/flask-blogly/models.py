from distutils.command.build_scripts import first_line_re
from flask_sqlalchemy import SQLAlchemy
from datetime import date, datetime

db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)

# Model go Below


class User(db.Model):
    '''User Model'''

    __tablename__ = 'users'

    @classmethod
    def get_all_users(cls):
        '''Get all the user in the DB'''
        return cls.query.order_by(User.last_name.asc()).all()

    @classmethod
    def get_user_by_id(cls, id):
        return cls.query.get(id)

    # this way is a better representation of the class at the time we print the class
    def __repr__(self):
        '''Better Representation of the class'''
        user = self
        return f'<User id={user.id} name={user.first_name} last_name={user.last_name} image_url=SomeIMg>'

    @property
    def fullname(self):
        '''Property to acces to the user full name'''
        return '{} {} {}'.format(self.first_name, self.middle_name if self.middle_name else '', self.last_name)

    @fullname.setter
    def fullname(self, name):
        '''Set User full name variables first, middle and last name
        Note: middle name can be empty
        '''
        self.first_name, self.middle_name, self.last_name = name.split(' ')

    @fullname.deleter
    def fullname(self, name):
        '''Set User full name variables first, middle and last name to None
        Note: middle name can be empty
        '''
        self.first_name, self.middle_name, self.last_name = None, None, None

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    first_name = db.Column(db.String(50),
                           nullable=False,
                           unique=True)

    middle_name = db.Column(db.String(50),
                            nullable=True)

    last_name = db.Column(db.String(50),
                          nullable=False)

    image_url = db.Column(db.Text,
                          nullable=True,
                          default='https://cdn-icons-png.flaticon.com/512/906/906331.png?w=826&t=st=1660696447~exp=1660697047~hmac=794234f31e068797117461494bd6b8f0f9889bcb0927355efe4b454f6bd7e9e5')


class Post(db.Model):
    '''Pet Model'''

    __tablename__ = 'posts'

    @classmethod
    def get_all_posts_for_user(cls, user_id):
        '''Get all the post in the DB'''
        return cls.query.filter(Post.user_id == user_id).all()

    @classmethod
    def get_post_by_id(cls, id):
        '''Get all the post in the DB'''
        return cls.query.filter(Post.id == id).first()

    @classmethod
    def get_last_post(cls):
        '''Get last 3 post added'''

        return cls.query.order_by(Post.id.desc()).limit(3)

    def __repr__(self):
        '''Better Representation of the class'''
        return f'id={self.id} title={self.title} create_at={self.create_at} user_id={self.user_id}'

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    title = db.Column(db.String(50),
                      nullable=False,
                      unique=True)

    content = db.Column(db.Text,
                        nullable=True)

    create_at = db.Column(db.DateTime,
                          nullable=False,
                          default=datetime.now().strftime("%Y/%m/%d, %I:%M:%S %p"))

    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete='CASCADE'))

    user = db.relationship('User', backref='posts')
    tagged = db.relationship('PostTag', backref='post')
    tags = db.relationship(
        'Tag', secondary='post_tags', backref='posts')


class Tag(db.Model):
    '''Model for Tag Table'''

    __tablename__ = 'tags'

    # @classmethod
    # def get_last_post(cls):
    #     '''Get last 3 post added'''

    #     return cls.query.order_by(Post.id.desc()).limit(3)

    def __repr__(self):
        '''Better Representation of the class'''
        return f'< id={self.id} tag_name={self.tag_name} >'

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    tag_name = db.Column(db.String(50),
                         nullable=False,
                         unique=True)

    tagged = db.relationship('PostTag', backref='tags')


class PostTag(db.Model):
    '''Relationship post and tag'''

    __tablename__ = 'post_tags'

    # @classmethod
    # def get_last_post(cls):
    #     '''Get last 3 post added'''

    #     return cls.query.order_by(Post.id.desc()).limit(3)

    def __repr__(self):
        '''Better Representation of the class'''
        return f'< post_id={self.post_id} tag_id={self.tag_id} >'

    post_id = db.Column(db.Integer, db.ForeignKey(
        'posts.id'), primary_key=True)

    tag_id = db.Column(db.Integer, db.ForeignKey(
        'tags.id'), primary_key=True)
