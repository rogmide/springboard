from unittest import result

def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """

    # [dict(t) for t in {tuple(d.items()) for d in l}]
    temp = phrase.lower()
    res = [{char: temp.count(char)} for char in temp if char in 'aeiou']
    return [dict(tup) for tup in {tuple(directory.items()) for directory in res}] 



    
    