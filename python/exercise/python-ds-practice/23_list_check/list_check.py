def list_check(lst):
    """Are all items in lst a list?

        >>> list_check([[1], [2, 3]])
        True

        >>> list_check([[1], "nope"])
        False
    """


    # for item in lst:
    #     if not isinstance(item, list):
    #         return False        
    # return True

    #any return the first True that finds
    # so if condition is not a list then return True 
    # so we negate the condition "not True" --- someone in the list is not a list
    #if any cant find a True then return False --- if they all false they all are a list so "not False"
    return not any(not isinstance(item, list) for item in lst)