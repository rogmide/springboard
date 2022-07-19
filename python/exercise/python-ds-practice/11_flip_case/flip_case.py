def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    temp = ''
    for char in phrase:
        if to_swap == char.upper() or to_swap == char.lower():
            if (char.isupper()):
                char = char.lower()
                temp = temp + char
            else:
                char = char.upper()
                temp = temp + char
        else:
            temp = temp + char
    return temp
