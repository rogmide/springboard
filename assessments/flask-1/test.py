from unittest import TestCase
from app import app


class FlaskTests(TestCase):

    def setUp(self):
        self.client = app.test_client()

    def test_home(self):
        '''Test Home Page'''

        with self.client:
            response = self.client.get('/')
            self.assertIn(
                b'<h1 class="welcome">Welcome to Currency Converter </h1>', response.data)

    def test_converter(self):
        '''Test Converter Page'''

        with self.client:
            response = self.client.get('/converter')
            self.assertIn(
                b'<div class="valid-feedback">Looks good!</div>', response.data)
    
    def test_conversions(self):
        '''Test conversions Page'''

        with self.client:
            response = self.client.get('/conversions')
            self.assertIn(
                b'<h2 class="welcome">', response.data)
