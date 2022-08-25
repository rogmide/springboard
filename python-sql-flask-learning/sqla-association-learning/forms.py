from flask_wtf import FlaskForm
from models import Department, Employee, Project, EmployeeProject, db, connect_db, get_directory, get_directory_join, get_directory_join2, get_directory_all_join
from wtforms import StringField, FloatField, BooleanField, IntegerField, RadioField, SelectField
from wtforms.validators import InputRequired, Email


class AddSnackForm(FlaskForm):
    '''Create form to add snacks'''

    name = StringField('Snack Name', validators=[InputRequired(message='Snack Need To Have a Name')])
    # email = StringField('Email', validators=[Email()])
    price = FloatField('Price in USD')
    quantity = IntegerField('How Many?')
    is_healthy = BooleanField('Healthy?')

    # category = RadioField('Category', choices=[('ic','Ice Cream'), ('chips', 'Potato Chips'), ('candy', 'Candy/Sweets')])
    another_category = SelectField('Category', choices=[('ic','Ice Cream'), ('chips', 'Potato Chips'), ('candy', 'Candy/Sweets')])



class NewEmployeeForm(FlaskForm):
    '''Create form to add employee'''

    name = StringField('Employee Name')
    state = StringField('State')
    dept_code = SelectField('Deparment Code')
    # dept_code = RadioField('Deparment Code')


