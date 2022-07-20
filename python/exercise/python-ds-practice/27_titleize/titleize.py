def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    
    # create a list from the split of the str on the ' '
    # then map all the str in the list with capitalize
    # then join all the item of the list with a ' ' in between
    my_list = phrase.split(' ')
    my_list = list(map(str.capitalize, my_list))
    my_list = ' '.join(map(str, my_list))
    return my_list


