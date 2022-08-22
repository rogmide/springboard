from flask import Flask, request, redirect, render_template
from models import Department, Employee, Project, EmployeeProject, db, connect_db, get_directory, get_directory_join, get_directory_join2, get_directory_all_join

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///employees_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "123"

connect_db(app)


@app.route('/')
def home_page():
    '''Show Home Page'''

    # db.drop_all()
    # db.create_all()

    #  Testing
    # d = Department(dept_code='lgl', dept_name='legal',
    #                dept_phone='123-4567')

    # e = Employee(name='Bod Bobbins', state='AK', dept_code='lgl')

    # db.session.add(e)
    # db.session.commit()

    # TESTING RELATIONSHIP
    # emp = Employee.query.get(1)
    # print(emp.dept.dept_name, emp.dept.dept_phone)

    # dept = Department.query.get('mktg')
    # emp = dept.employees

    # for e in emp:
    #     print(emp, dept)

    # # TYPE OF QUERY
    # Employee.query.filter(Employee.name == 'Jane')
    # Employee.query.filter(Employee.name != 'Jane')
    # Employee.query.filter(Employee.id > 65)
    # Employee.query.filter(Employee.name.like('%Jane%'))  # LIKE
    # Employee.query.filter(Employee.name.ilike('%Jane%'))  # iLIKE 
    # Employee.query.filter(Employee.id.in_(22, 33, 44))  # IN ()

    return render_template('home.html')


@app.route('/phones')
def list_phones():

    emps = Employee.query.all()
    # emps_dept = db.session.query(Employee.name, Department.dept_phone).join(Department).all()
    emps_dept = db.session.query(Employee.name, Department.dept_phone).join(Department).filter(Employee.state == 'DC')

    return render_template('phones.html', emps=emps, emps_dept=emps_dept)
