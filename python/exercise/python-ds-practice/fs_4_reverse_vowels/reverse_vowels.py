from multiprocessing.sharedctypes import Value


def reverse_vowels(s):
    """Reverse vowels in a string.

    Characters which re not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """
    #  There is better ways to do this, but this is the way that i find
    #  look like 4 for loop is over kill LOL LOL LOL but works
    # find all the vowels in the string and return [vowel, position]
    temp = [[s[i], i] for i in range(0, len(s)) if s[i].lower() in 'aeiou']

    # val will hold the position of the vowels and then reverse
    val = []
    for i in range(0, len(temp)):
        val.append(temp[i][1])
    val.reverse()
    # return the reverse values to the temporary list 'temp'
    for i in range(0, len(temp)):
        temp[i][1] = val[i]
    # convert 's' to a list and remplace the vowels one by one with the new position
    s = list(s)
    for i in range(0, len(temp)):
        s[temp[i][1]] = temp[i][0] 
    res = ''
    # conver the 's' that is a list at this point back into a string 'str'
    for i in s:
        res += i   
    return res
