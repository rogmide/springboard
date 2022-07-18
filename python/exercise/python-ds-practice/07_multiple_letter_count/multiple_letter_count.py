def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """

    # char2 = {char for char in 'hello darkness my of friend'if char in 'aeiou'}
    return {char: phrase.count(char) for char in phrase}
