from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)

# Model go Below


class Pet(db.Model):
    '''Pet Model'''

    __tablename__ = 'pets'

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    name = db.Column(db.String(50),
                     nullable=False,
                     unique=True)

    species = db.Column(db.String(50),
                        nullable=True)

    hunger = db.Column(db.Integer,
                       nullable=False,
                       default=20)
