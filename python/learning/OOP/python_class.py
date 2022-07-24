# from collections import Counter
from datetime import date
# import time

# my_counter = Counter('asdasd adasd asda adasda')
# my_date = date(2022, 3, 3)
# my_time = time.time()

from math import sqrt
from random import randint


class Triangle:
    '''
    A class used to represent a Right Triangle

    Attributes
    a: int
        lenght of side a
    b: int
        lenght of side b

    '''

    # this next section is like a constructor in javascript
    # self works like this in javascript
    def __init__(self, a, b):
        self.a = a
        self.b = b

    # describe the class more profesional
    def __repr__(self):
        return f'< Triangle(a = {self.a} b = {self.b}) >'

    # describe the class more loose
    def __str__(self):
        return self.describe()

    def __eq__(self, other):
        return self.a == other.a and self.b == other.b

    @classmethod
    def random(cls):
        '''Class method wich returns Triangle with random sides'''
        return cls(randint(1, 20), randint(1, 20))

    def get_hypotenuse(self):
        '''Calculta hypotenuse 3rd side of a right triangle'''
        return sqrt(self.a ** 2 + self.b ** 2)

    def get_area(self):
        '''Calculate are of right triangle'''
        return self.a * self.b / 2

    def describe(self):
        '''string that describe the side of the right triangle'''
        return f'I am a triangle with sides: {self.a} & {self.b}'


class ColoredTriangle(Triangle):
    '''
    Triangle that extend from Triangle class
    like javascript class blablabla extend bla {

    }
    but in python is class NAME(PARENT CLASS NAME)
    '''

    def __init__(self, a, b, color):
        super().__init__(a, b)
        self.color = color

    def describe(self):
        # calling the describe function from parent
        # super().
        msg = super().describe()
        return f'{msg}. I am color {self.color}'
