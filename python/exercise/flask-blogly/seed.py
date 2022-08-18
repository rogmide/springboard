"""Seed file to make sample data for pets db."""

from models import User, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
User.query.delete()

jon = User(first_name='Jon', middle_name="Mid",
           last_name='Smith', image_url=None)
doe = User(first_name='Doe', middle_name="Dle",
           last_name='Castle', image_url=None)
jimy = User(first_name='Jimy', middle_name="Nam",
            last_name='Star', image_url=None)

# Add new objects to session, so they'll persist
db.session.add(jon)
db.session.add(doe)
db.session.add(jimy)

# Commit--otherwise, this never gets saved!
db.session.commit()
