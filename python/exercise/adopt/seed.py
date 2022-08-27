from models import Pet, connect_db, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

pet1 = Pet(name='Doggy', species='Dog',
           photo_url='https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', age=12, notes='Id eu nisl nunc mi ipsum faucibus vitae aliquet. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.',
           available=True)
pet2 = Pet(name='Catrina', species='Cat',
           photo_url='https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', age=9, notes='Id eu nisl nunc mi ipsum faucibus vitae aliquet. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.',
           available=True)
pet3 = Pet(name='Rocket', species='chicken',
           photo_url='https://images.unsplash.com/photo-1578051696754-4652a8f67882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80', age=2, notes='Id eu nisl nunc mi ipsum faucibus vitae aliquet. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.',
           available=True)
pet4 = Pet(name='T-Rex', species='Lizard',
           photo_url='https://images.unsplash.com/photo-1614291644646-087716dcd295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80', age=20, notes='Id eu nisl nunc mi ipsum faucibus vitae aliquet. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.',
           available=True)

db.session.add_all([pet1, pet2, pet3, pet4])
db.session.commit()
