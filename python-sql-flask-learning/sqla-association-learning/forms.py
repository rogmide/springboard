from email import message
from flask_wtf import FlaskForm
from models import Department, Employee, Project, EmployeeProject, db, connect_db, get_directory, get_directory_join, get_directory_join2, get_directory_all_join
from wtforms import StringField, FloatField, BooleanField, IntegerField, RadioField, SelectField
from wtforms.validators import InputRequired, Email, Optional


states = [ 'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA',
           'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME',
           'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM',
           'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX',
           'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']


class AddSnackForm(FlaskForm):
    '''Create form to add snacks'''

    name = StringField('Snack Name', validators=[
                       InputRequired(message='Snack Need To Have a Name')])

    # For Email Validator had to pip install email_validator
    email = StringField('Email', validators=[InputRequired(), Email()])
    price = FloatField('Price in USD')
    quantity = IntegerField('How Many?')
    is_healthy = BooleanField('Healthy?')

    # category = RadioField('Category', choices=[('ic','Ice Cream'), ('chips', 'Potato Chips'), ('candy', 'Candy/Sweets')])
    another_category = SelectField('Category', choices=[(
        'ic', 'Ice Cream'), ('chips', 'Potato Chips'), ('candy', 'Candy/Sweets')])


class EmployeeForm(FlaskForm):
    '''Create form to add employee'''

    name = StringField('Employee Name', validators=[InputRequired(message='Add a name plz')])
    state = SelectField('State', choices=states)
    dept_code = SelectField('Deparment Code')
    # dept_code = RadioField('Deparment Code')
