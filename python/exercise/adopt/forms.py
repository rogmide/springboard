from optparse import Option
from tokenize import String
from models import Pet, connect_db, db
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import InputRequired, Optional


class AddPetForm(FlaskForm):
    '''Form to add new Per'''

    name = StringField('Pet name: ', validators=[
                       InputRequired(message='Name is Required')])
    species = StringField('Species: ', validators=[Optional()])
    photo_url = StringField('Photo Url: ', validators=[Optional()])
    age = IntegerField('Age: ', validators=[Optional()])
    notes = TextAreaField('Notes: ', validators=[Optional()])
