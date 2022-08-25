from crypt import methods
from xml.dom.minidom import Document
from flask import Flask, request, redirect, render_template, flash
from models import Department, Employee, Project, EmployeeProject, db, connect_db, get_directory, get_directory_join, get_directory_join2, get_directory_all_join
from forms import AddSnackForm, NewEmployeeForm

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///employees_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
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


@app.route('/snacks/new', methods=["GET", "POST"])
def add_snack():
    '''Create form to add Snacks'''

    form = AddSnackForm()

    # this will validate that the fiels is what you declare int or string need to mach
    if form.validate_on_submit():

        name = form.name.data
        price = form.price.data
        healthy = form.is_healthy.data
        quantity = form.quantity.data

        flash(
            f'Created new Snack name: {name}and price: {price} healthy: {healthy} quantity: {quantity}')

        return redirect('/')
    else:
        return render_template('add_snack_form.html', form=form)


@app.route('/phones')
def list_phones():

    emps = Employee.query.all()
    # emps_dept = db.session.query(Employee.name, Department.dept_phone).join(Department).all()
    emps_dept = db.session.query(Employee.name, Department.dept_phone).join(
        Department).filter(Employee.state == 'DC')

    return render_template('phones.html', emps=emps, emps_dept=emps_dept)


@app.route('/employees/new', methods=['GET', 'POST'])
def add_employeed():

    form = NewEmployeeForm()

    # This for some reason is not working for me
    depts = db.session.query(Department.dept_code, Department.dept_name)
    # i create de list using this query to the database and it works
    
    depts2 = [(d.dept_code, d.dept_name) for d in Department.query.all()]
    
    form.dept_code.choices = depts2

    if form.validate_on_submit():
        name = form.name.data
        state = form.state.data
        dept_code = form.dept_code.data

        new_emp = Employee(name=name, state=state, dept_code=dept_code)
        db.session.add(new_emp)
        db.session.commit()

        return redirect('/phones')
    else:

        return render_template('add_employee_form.html', form=form)
