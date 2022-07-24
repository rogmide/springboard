"""Python serial number generator."""


class SerialGenerator:
    """Machine to create unique incrementing serial numbers.

    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100

    Attribute
    start: int        
        beginning number of the serial generator        
    last: int
        last number generated
        default value 0 for the start on the obj
    first: boolean
        at the start of the class creation we use first
        to controle when is the first time that the series
        is created  it will run False until is reset
    """

    def __init__(self, start, last=0, first=True):
        self.start = start
        self.last = self.start + last
        self.first = first

    def __repr__(self):
        return f'Serial number Start At:  {self.start}, Currenet Serial: {self.last}'

    def generate(self):
        '''Generate the next serial number in the sequence'''
        if self.first:
            self.last = self.last
            self.first = False
        else:
            self.last = self.last + 1
        return self.last

    def reset(self):
        '''Reset the number where the sequence start'''
        self.first = True
        self.last = self.start
