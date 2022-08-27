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
                          default='https://cdn-icons-png.flaticon.com/512/906/906331.png?w=826&t=st=1660696447~exp=1660697047~hmac=794234f31e068797117461494bd6b8f0f9889bcb0927355efe4b454f6bd7e9e5')

    age = db.Column(db.Integer,
                    nullable=True)

    notes = db.Column(db.Text,
                      nullable=True)

    available = db.Column(db.Boolean, default=True)
