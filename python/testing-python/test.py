from unittest import TestCase

def adder(x, y):
    """Adds two numbers together.

        >>> adder(1, 1)
        2

        >>> adder(-1, 1)
        0

        >>> adder(2, 2)
        4
    """

    return x + y


# assert adder(2, 5) == 7
# assert adder(2, 7) == 10
# assert adder(2, 3) == 5


class AdditionTestCase(TestCase):
    """Examples of unit tests."""

    def test_adder(self):
        assert adder(2, 3) == 5
    
    def test_adder_2(self):
        # instead of assert arithmetic.adder(2, 2) == 4
        self.assertEqual(adder(2, 2), 4)


'''

Method	                   Checks that
assertEqual(a, b)	       a == b
assertNotEqual(a, b)       a != b
assertTrue(x)	           bool(x) is True
assertFalse(x)	           bool(x) is False
assertIs(a, b)	           a is b
assertIsNot(a, b)          a is not b
assertIsNone(x)	           x is None
assertIsNotNone(x)	       x is not None
assertIn(a, b)      	   a in b
assertNotIn(a, b)   	   a not in b
assertIsInstance(a, b)     isinstance(a, b)
assertNotIsInstance(a, b)  not isinstance(a, b)

'''