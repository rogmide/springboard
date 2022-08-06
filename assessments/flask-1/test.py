from unittest import TestCase
from app import app
from currency import convert_currency


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

    def test_convert_currency(self):
        '''Test convertion for the currency from on to another'''

        self.assertIsNot(convert_currency('USD', 'EUR', 100), None)

    def test_redirect_bad_currency(self):
        '''Test redirect on bad currency'''

        c_from = "bad_currency"
        c_to = "USD"
        c_amount = 200

        response = self.client.get(
            f'/conversions?from={c_from}&to={c_to}&amount={c_amount}', follow_redirects=True)
        self.assertIn(
            b'<div class="valid-feedback">Looks good!</div>', response.data)
