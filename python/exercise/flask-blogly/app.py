from crypt import methods
from flask import Flask, request, redirect, render_template, flash
from models import User, Post, Tag, PostTag, db, connect_db

app = Flask(__name__)

# flash(f"User {new_user.full_name} added.")

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


@app.route('/tags')
def get_all_tags():
    '''Get the tags from the Db'''

    tags = Tag.get_all_tags()

    return render_template('tags.html', tags=tags)


@app.route('/tags/<int:id>')
def get_tag_detail_by_id(id):
    '''Render tag detail using the tag id'''

    tag = Tag.get_tag_by_id(id)
    # posts = PostTag.query.filter(PostTag.tag_id == id).all()

    return render_template('tag_details.html', tag=tag)


@app.route('/tags/new')
def show_new_tag_form():
    '''Show page with form to add a new tag'''

    posts = Post.get_all_post()

    return render_template('tag_new.html', posts=posts)


@app.route('/tags/new', methods=['POST'])
def handle_add_tag_to_db():
    '''Add the tag that is created to the db'''

    new_tag = Tag(tag_name=request.form['tag_name'])

    post_ids = request.form.getlist("ids")
    new_tag.posts = Post.query.filter(Post.id.in_(post_ids)).all()

    db.session.add(new_tag)
    db.session.commit()

    return redirect('/tags')


@app.route('/tags/<int:id>/edit')
def get_tag_to_be_edit(id):
    '''Show the tag that will be edited'''

    # cls.query.filter(Post.id == id).first()
    tag = Tag.get_tag_by_id(id)
    posts = Post.query.all()

    for t_p in tag.posts:
        if t_p in posts:
            posts.remove(t_p)

    return render_template('tag_edit.html', tag=tag, posts=posts)


@app.route('/tags/<int:id>/edit', methods=['POST'])
def handdle_edit_tag(id):
    '''Show the tag that will be edited'''

    tag = Tag.get_tag_by_id(id)
    tag.tag_name = request.form['tag_name']

    post_ids = request.form.getlist("ids")
    tag.posts = Post.query.filter(Post.id.in_(post_ids)).all()

    # for p in posts:
    #     p.tagged.append(PostTag(post_id=p.id, tag_id=id))

    db.session.add(tag)
    db.session.commit()

    return redirect('/tags')


@app.route('/tags/<int:id>/delete', methods=['POST'])
def handdle_delite_tag(id):
    '''Show the tag that will be edited'''

    Tag.query.filter(Tag.id == id).delete()

    db.session.commit()

    return redirect('/tags')


@app.errorhandler(404)
def not_found(e):
    '''404 Error Handeling'''

    return render_template("404.html")
