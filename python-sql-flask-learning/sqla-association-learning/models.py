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

    # Importan session about relationships
    # Setting up a relationship this - deparment to Employee - and backref="name of variable" to reference back
    dept = db.relationship('Department', backref='employees')
    assignments = db.relationship('EmployeeProject', backref='employee')
    projects = db.relationship('Project', secondary='employees_projects', backref='employees')


class Project(db.Model):
    '''Project Model'''

    __tablename__ = 'projects'

    proj_code = db.Column(db.Text, primary_key=True)
    proj_name = db.Column(db.Text, nullable=False, unique=True)
    assignments = db.relationship('EmployeeProject', backref='project')


class EmployeeProject(db.Model):
    '''Many - to - Many Relationship'''

    __tablename__ = 'employees_projects'

    emp_id = db.Column(db.Integer, db.ForeignKey(
        'employee.id'), primary_key=True)
    proj_code = db.Column(db.Text, db.ForeignKey(
        'projects.proj_code'), primary_key=True)
    role = db.Column(db.Text)


def get_directory():
    all_emps = Employee.query.all()

    for emp in all_emps:
        if emp.dept is not None:
            print(emp.name, emp.dept.dept_name, emp.dept.dept_phone)
        else:
            print(emp.name)


def get_directory_join():

    directory = db.session.query(
        Employee.name, Department.dept_name, Department.dept_phone).join(Department).all()

    for name, dept_name, dept_phone in directory:
        print(name, dept_name, dept_phone)


def get_directory_join2():

    # Here you can get the full obj and work with the Obj
    directory = db.session.query(Employee, Department).join(Department).all()

    for emp, dept in directory:
        print(emp.name, dept.dept_phone)


def get_directory_all_join():

    # Here you can get the full obj and work with the Obj
    directory = db.session.query(
        Employee, Department).outerjoin(Department).all()

    for emp, dept in directory:
        print(emp, dept)
