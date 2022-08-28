from optparse import Option
from tokenize import String
from models import Pet, connect_db, db
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, BooleanField
from wtforms.validators import InputRequired, AnyOf, NumberRange, URL, Optional


class AddPetForm(FlaskForm):
    '''Form to add new Per'''

    name = StringField('Pet name: ', validators=[
                       InputRequired(message='Name is Required')])

    species = StringField('Species: ', validators=[AnyOf(
        ['cat', 'dog', 'porcupine', 'Cat', 'Dog', 'Porcupine'], message='We can shelter only Cat, Dog or Porcupine'), Optional()])

    photo_url = StringField('Photo Url: ', validators=[URL(
        require_tld=True, message='Enter Valid URL'), Optional()])

    age = IntegerField('Age: ', validators=[NumberRange(
        min=1, max=30, message='Age 0 to 30 years Only'), Optional()])

    notes = TextAreaField('Notes: ', validators=[Optional()])

    available = BooleanField('Available: ', validators=[Optional()])
