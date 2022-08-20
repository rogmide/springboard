from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)

# Model go Below


class Department(db.Model):
    '''Deparment Model'''

    __tablename__ = "department"

    def __repr__(self) -> str:
        return f'Department {self.dept_code} {self.dept_name} {self.dept_phone}'

    dept_code = db.Column(db.Text, primary_key=True)
    dept_name = db.Column(db.Text, nullable=False, unique=True)
    dept_phone = db.Column(db.Text)


class Employee(db.Model):
    '''Employee Model'''

    __tablename__ = "employee"

    def __repr__(self) -> str:
        return f'Employee {self.name} {self.state} {self.dept_code}'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text, nullable=False, unique=True)
    state = db.Column(db.Text, nullable=False, default='CA')
    dept_code = db.Column(db.Text, db.ForeignKey('department.dept_code'))

    # Setting up a relationship this - deparment to Employee - and backref="name of variable" to reference back
    dept = db.relationship('Department', backref='employees')


def get_directory():
    all_emps = Employee.query.all()

    for emp in all_emps:
        if emp.dept is not None:
            print(emp.name, emp.dept.dept_name, emp.dept.dept_phone)
        else:
            print(emp.name)
