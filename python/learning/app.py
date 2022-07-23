import imp
from faker import Faker

fake = Faker()



for i in range(0,10):
    print(fake.name())


#  source venv/bin/activate