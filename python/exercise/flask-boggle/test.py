from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle


class FlaskTests(TestCase):

    def setUp(self):
        self.client = app.test_client()

    def test_home(self):
        '''Test Home and Make sure Board is Create'''

        with self.client:
            response = self.client.get('/')
            self.assertIn('board', session)
            self.assertIsNone(session.get('higher_score'))
            self.assertIn(b'<h1>Score</h1>', response.data)

    def test_check_word(self):
        '''Check that there is a word in the board'''

        with self.client as client:
            with client.session_transaction() as ses_tran:
                ses_tran['board'] = [["S", "O", "U", "L", "X"],
                                     ["R", "U", "N", "X", "X"],
                                     ["P", "Y", "T", "O", "N"],
                                     ["H", "O", "P", "E", "X"],
                                     ["W", "I", "N", "X", "X"]]
        response = self.client.get('/check_word/soul')
        self.assertEqual(response.json['result'], 'ok')

    def test_not_word(self):
        '''Check that a word is in the board or is a word at all'''

        self.client.get('/')
        response = self.client.get('/check_word/adabracadabra')
        self.assertEqual(response.json['result'], 'not-word')

    def test_valid_word(self):
        '''check if the word is valid but it not on the board'''

        self.client.get('/')
        response = self.client.get('/check_word/car')
        self.assertEqual(response.json['result'], 'not-on-board')
