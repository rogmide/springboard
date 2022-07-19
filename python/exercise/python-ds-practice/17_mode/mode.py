def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """

    # Create a Disctionary with the number that are in the list 2 or more times
    # then return len of the list to know how many number are there 
    temp = [{num: nums.count(num) for num in nums if nums.count(num) >= 2}]
    print(temp)
    return len(temp[0])
