import os
from random import randint


class WordFinder:
    '''
    Word Finder: finds random words from a dictionary.

        Attributes
    path: srt
        Path will hold the path to the current folder where the app is
    all_word: list
        all_word will hold all the letter that appear in the file
        that is loaded 1 time

    '''

    def __init__(self, file_name, path='', all_word=[]):
        self.file_name = file_name
        self.path = path
        self.all_word = all_word
        self.path = os.getcwd()
        self.get_all_word()

    def __repr__(self):
        return f'Currend word loaded on file: {len(self.all_word)}'

    def get_all_word(self):
        '''
        This function fill up the list of all work that are in the file txt
        '''
        with open(self.path + f'/{self.file_name}') as file:
            lines = file.readlines()

        self.all_word = []
        for i in range(0, len(lines) - 1):
            self.all_word.append(lines[i][:-1:])
        self.all_word.append(lines[-1])

    def random(self):
        '''
        Return a random work from the list of all_word
        '''
        return self.all_word[randint(0, len(self.all_word)-1)]


class SpecialWordFinder(WordFinder):
    '''
    Special class to handle list of word that have empty space or special char
    in this case '#'
    '''

    def __init__(self, file_name, path='', all_word=[]):
        super().__init__(file_name, path, all_word)
        self.remove_empty_lines()

    def remove_empty_lines(self):
        '''
        Go a check in the list of word if there is any '#' or '' and removed
        '''
        for i in range(0, len(self.all_word) - 1):
            if self.all_word[i].startswith('#'):
                self.all_word.pop(i)
        if self.all_word.count('') >= 1:
            self.all_word.remove('')
