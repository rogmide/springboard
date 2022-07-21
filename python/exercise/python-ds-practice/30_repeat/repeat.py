def repeat(phrase, num):
    """Return phrase, repeated num times.

        >>> repeat('*', 3)
        '***'

        >>> repeat('abc', 2)
        'abcabc'

        >>> repeat('abc', 0)
        ''

    Ignore illegal values of num and return None:

        >>> repeat('abc', -1) is None
        True

        >>> repeat('abc', 'nope') is None
        True
    """

    if not type(num) is int:
        return True

    if not num >= 0:
        return True

    temp = ''
    for i in range(1, num + 1):
        temp += phrase
    return temp
