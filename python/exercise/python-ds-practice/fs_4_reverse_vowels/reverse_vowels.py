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

    temp = [{s[i]: i} for i in range(0, len(s)) if s[i] in 'aeiou']
    sorted_values = []

    for i in range(0, len(temp)):
        print(temp[i].values())

    print(temp)
    print(sorted_values)
    return temp
