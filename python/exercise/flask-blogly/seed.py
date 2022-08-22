from models import User, Post, Tag, PostTag, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
# User.query.delete()

jon = User(first_name='Jon', middle_name="",
           last_name='Smith', image_url=None)
doe = User(first_name='Doe', middle_name="",
           last_name='Castle', image_url=None)
jimy = User(first_name='Jimy', middle_name="",
            last_name='Star', image_url=None)

post1 = Post(title='Consectetur',
             content='Aliquet eget sit amet tellus cras adipiscing enim eu turpis.', user_id=1)
post2 = Post(title='Feugiat',
             content='Erat velit scelerisque in dictum non consectetur a.', user_id=2)
post3 = Post(title='Orci',
             content='Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.', user_id=3)

tag1 = Tag(tag_name='Fun')
tag2 = Tag(tag_name='Zope')
tag3 = Tag(tag_name='Bloop')

db.session.add_all([jon, doe, jimy, post1, post2, post3, tag1, tag2, tag3])
db.session.commit()

tag1.tagged.append(PostTag(post_id=1, tag_id=1))
tag2.tagged.append(PostTag(post_id=2, tag_id=2))
tag3.tagged.append(PostTag(post_id=3, tag_id=3))

# Add new objects to session, so they'll persist
# db.session.add_all([tag1, tag2, tag3])

# Commit--otherwise, this never gets saved!
db.session.commit()
