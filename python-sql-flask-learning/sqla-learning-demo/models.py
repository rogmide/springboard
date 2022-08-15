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
    def get_by_species(cls, species):
        return cls.query.filter_by(species=species).all()

    @classmethod
    def get_all_hungry(cls):
        return cls.query.filter(Pet.hunger > 10 ).all()

    # this way is a better representation of the class at the time we print the class
    def __repr__(self):
        p = self
        return f'<Pet id={p.id} name={p.name} species={p.species} hunger={p.hunger}>'

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

    def greet(self):
        '''Print Data of the Pet'''
        return f'Hi, i am {self.name} the {self.species}'

    def feed(self, amount=20):
        '''Update hunger base off of amount'''
        self.hunger -= amount
        self.hunger = max(self.hunger, 0)
