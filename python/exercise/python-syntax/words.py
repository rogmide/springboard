def print_upper_words(myList):
    temp = []
    for char in myList:
        temp.append(char.upper())
    print(temp)


def must_start_with(char1, char2):
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
