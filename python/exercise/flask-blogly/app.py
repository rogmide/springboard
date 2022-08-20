from crypt import methods
from flask import Flask, request, redirect, render_template
from models import User, Post, db, connect_db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///users_exercise'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "123"

connect_db(app)


@app.route('/')
def home_page():
    '''Show Home Page'''

    # db.drop_all()
    # db.create_all()

    posts = Post.get_last_post()

    return render_template('home.html', posts=posts)


@app.route('/users')
def get_users_page():
    '''Show Users Page'''

    users = User.get_all_users()

    return render_template('users.html', users=users)


@app.route('/users/new')
def get_new_user_form():
    '''Get New User From Page'''

    return render_template('new_user.html')


@app.route('/users/new', methods=['POST'])
def add_user_to_db():
    '''Add a new user to the db'''

    first_name = request.form["first_name"]
    last_name = request.form['last_name']
    img_user = request.form['img_user']

    new_user = User(first_name=first_name,
                    last_name=last_name, image_url=img_user if img_user else None)

    db.session.add(new_user)
    db.session.commit()

    return redirect('/users')


@app.route('/users/<int:id>')
def get_user_detail_page(id):
    '''Show User Details Page'''

    user = User.get_user_by_id(id)

    posts = user.posts

    return render_template('user_details.html', user=user, posts=posts)


@app.route('/users/<int:id>/edit')
def get_edit_user_form(id):
    '''Show Form to change User Information that can be Edit'''

    user = User.get_user_by_id(id)

    return render_template('edit_user.html', user=user)


@app.route('/users/<int:id>/edit', methods=['POST'])
def edit_user_in_db(id):
    '''Edit a user information in the database'''

    user = User.get_user_by_id(id)

    user.first_name = request.form["first_name"]
    user.last_name = request.form['last_name']
    user.image_url = request.form['img_user'] if request.form['img_user'] else None

    db.session.add(user)
    db.session.commit()

    return redirect(f'/users')


@app.route('/users/<int:id>/delete', methods=['POST'])
def delete_user_db(id):
    '''Delete a user on the database usin a id'''

    User.query.filter(User.id == int(id)).delete()

    db.session.commit()

    return redirect(f'/users')


@app.route('/users/<int:id>/posts/new')
def get_all_user_posts(id):
    '''Show the form to add a new Post'''

    user = User.get_user_by_id(id)

    return render_template('post_new_form.html', user=user)


@app.route('/users/<int:id>/posts/new', methods=['POST'])
def add_post_for_user(id):
    '''Show the form to add a new Post'''

    title = request.form['title']
    content = request.form['content']

    new_post = Post(title=title, content=content, user_id=id)

    db.session.add(new_post)
    db.session.commit()

    return redirect(f'/users/{id}')


@app.route('/posts/<int:id>')
def get_postby_id(id):
    '''Get and Show Post by Id'''

    post = Post.get_post_by_id(id)

    return render_template('post_detail.html', post=post)


@app.route('/posts/<int:id>/edit')
def fill_post_by_id(id):
    '''Show Post that is going to be edit by Id'''

    post = Post.get_post_by_id(id)

    return render_template('post_edit.html', post=post, user=post.user)


@app.route('/posts/<int:id>/edit', methods=['POST'])
def edit_post_by_id(id):
    '''Handle the post edition and redirect back to the post detail'''

    post = Post.get_post_by_id(id)

    post.title = request.form['title']
    post.content = request.form['content']

    db.session.add(post)
    db.session.commit()

    return redirect(f'/posts/{id}')


@app.route('/posts/<int:id>/delete', methods=['POST'])
def delete_post_by_id(id):
    '''Handle Delete of a Post'''

    post = Post.get_post_by_id(id)
    user_id = post.user_id

    Post.query.filter(Post.id == id).delete()

    db.session.commit()

    return redirect(f'/users/{user_id}')


@app.errorhandler(404)
def not_found(e):
    '''404 Error Handeling'''

    return render_template("404.html")
