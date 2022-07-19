def multiply_even_numbers(nums):
    """Multiply the even numbers.

        >>> multiply_even_numbers([2, 3, 4, 5, 6])
        48

        >>> multiply_even_numbers([3, 4, 5])
        4

    If there are no even numbers, return 1.

        >>> multiply_even_numbers([1, 3, 5])
        1
    """

    # Store all the even number in a List
    res = []
    res = [num for num in nums if (num % 2 == 0)]

    temp = 1
    if len(res) > 0: 
        for num in res:
            if num % 2 == 0:
                temp = num * temp
    return temp