from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)

# Model go Below


class Pet(db.Model):
    '''Pet Model'''

    __tablename__ = 'pets'

    @classmethod
    def get_all_pets(cls):
        '''Get all the pet in the DB'''
        return cls.query.order_by(Pet.age.asc()).all()

    @classmethod
    def get_pet_by_id(cls, id):
        '''Get a Pet from db by Id'''
        return cls.query.get_or_404(id)

    def __repr__(self):
        '''Better Representation of the class'''
        p = self
        return f'<Pet id={p.id} name={p.name} last_name={p.species} age={p.age} available={p.available}>'

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    name = db.Column(db.String(50),
                     nullable=False,
                     )

    species = db.Column(db.Text,
                        nullable=True)

    photo_url = db.Column(db.Text,
                          nullable=True,
                          default='https://cdn-icons-png.flaticon.com/512/5540/5540629.png')

    age = db.Column(db.Integer,
                    nullable=True)

    notes = db.Column(db.Text,
                      nullable=True)

    available = db.Column(db.Boolean, default=True)
