from models import User, Post, Tag, PostTag, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

# Adding some user to the db
jon = User(first_name='Jon', middle_name="",
           last_name='Smith', image_url=None)
doe = User(first_name='Doe', middle_name="",
           last_name='Castle', image_url=None)
jimy = User(first_name='Jimy', middle_name="",
            last_name='Star', image_url=None)

# Adding some post for the users
post1 = Post(title='Consectetur',
             content='Aliquet eget sit amet tellus cras adipiscing enim eu turpis.', user_id=1)
post2 = Post(title='Feugiat',
             content='Erat velit scelerisque in dictum non consectetur a.', user_id=2)
post3 = Post(title='Orci',
             content='Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.', user_id=3)

# Creating some Tags to work with
tag1 = Tag(tag_name='Fun')
tag2 = Tag(tag_name='Zope')
tag3 = Tag(tag_name='Bloop')

# Adding the change to the db.session
db.session.add_all([jon, doe, jimy, post1, post2, post3, tag1, tag2, tag3])
# Commit this first part, the next will need to have existing post and tags to work
db.session.commit()

# Adding some relationship for post_tags
tag1.tagged.append(PostTag(post_id=1, tag_id=1))
tag2.tagged.append(PostTag(post_id=2, tag_id=2))
tag3.tagged.append(PostTag(post_id=3, tag_id=3))

# Commit--otherwise, this never gets saved!
db.session.commit()
