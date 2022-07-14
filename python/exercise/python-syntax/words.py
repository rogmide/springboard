def print_upper_words(myList):
    """Return a List with the uppercase word
        
    Sample 
    In: print_upper_words(["hello", "hey", "goodbye", "yo", "yes"])
    Out: ['HELLO', 'HEY', 'GOODBYE', 'YO', 'YES']   
    
    myList -  is a List
    temp - is a temporary variable to store the results 
        
    """
    temp = []
    for char in myList:
        temp.append(char.upper())
    print(temp)


def must_start_with(char1, char2):
    """Return all the word that the first letter start with char1 or char2
    
    Sample    
    myList = ["Apple", "park", "sleep", ]
    In: must_start_with("a", "p")
    Out: ['Apple', 'park']
    
    myList - is a list with words
    temp - is a temporary variable to store the results 
    
    """
    myList = ["Apple", "park","amazing", "walter", "macbook pro",
              "Water", "sleep", "My My Need One"]
    print(myList)
    temp = []
    for word in myList:
        if (word[0] == char1 or word[0].lower() == char1) or (word[0] == char2 or word[0].lower() == char2):
            temp.append(word)
    print(f'here the word that start with {char1} or {char2}: ',temp)

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"])
must_start_with("a", "m")
