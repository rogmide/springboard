from unittest import TestCase
from test import reverse_str, is_palindrome, simple_math

# you have to add the test_ at as name for the function to do the test
class AlltoTestCase(TestCase):
    def test_reverse(self):
        self.assertEqual(reverse_str('hello'), 'olleh')
        self.assertEqual(reverse_str('Apple'), 'elppA')

    def test_is_palindrome(self):
        self.assertTrue(is_palindrome('racecar'))
        self.assertFalse(is_palindrome('taco'))

    def test_simple_math(self):
        self.assertEqual(simple_math(1,1,2), 3)
