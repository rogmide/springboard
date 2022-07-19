def compact(lst):
    """Return a copy of lst with non-true elements removed.

        >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
        [1, 2, 'All done']
    """

    # For some reason list.remove() will NOT REMOVE empty list or ()

    # Working Solution
    # return [ele for ele in lst if bool(ele)]
    
    # Another Working Solution
    # temp = []
    # for ele in lst:
    #     if (bool(ele)):
    #         temp.append(ele)
    # return temp

    return list(filter(None, lst))
