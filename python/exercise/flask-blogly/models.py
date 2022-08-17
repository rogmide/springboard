from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)

# Model go Below


class User(db.Model):
    '''Pet Model'''

    __tablename__ = 'users'

    @classmethod
    def get_all_users(cls):
        return cls.query.all()

    @classmethod
    def get_user_by_id(cls, id):
        return cls.query.get(id)

    # this way is a better representation of the class at the time we print the class
    def __repr__(self):
        user = self
        return f'<User id={user.id} name={user.first_name} last_name={user.last_name} image_url=SomeIMg>'

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    first_name = db.Column(db.String(50),
                           nullable=False,
                           unique=True)

    last_name = db.Column(db.String(50),
                          nullable=False)

    image_url = db.Column(db.Text,
                          nullable=True,
                          default='https://cdn-icons-png.flaticon.com/512/906/906331.png?w=826&t=st=1660696447~exp=1660697047~hmac=794234f31e068797117461494bd6b8f0f9889bcb0927355efe4b454f6bd7e9e5')

    def greet(self):
        '''Print Data of the Pet'''
        return f'Hi, i am {self.first_name} the {self.last_name}'
