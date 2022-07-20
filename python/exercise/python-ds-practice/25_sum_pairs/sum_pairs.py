def sum_pairs(nums, goal):
    """Return tuple of first pair of nums that sum to goal.

    For example:

        >>> sum_pairs([1, 2, 2, 10], 4)
        (2, 2)

    (4, 2) sum to 6, and come before (5, 1):

        >>> sum_pairs([4, 2, 10, 5, 1], 6) # (4, 2)
        (4, 2)

    (4, 3) sum to 7, and finish before (5, 2):

        >>> sum_pairs([5, 1, 4, 8, 3, 2], 7)
        (4, 3)

    No pairs sum to 100, so return empty tuple:

        >>> sum_pairs([11, 20, 4, 2, 1, 5], 100)
        ()
    """
    # (4, 3) sum to 7, and finish before (5, 2):
    # sum_pairs([5, 1, 4, 8, 3, 2], 7)
    # This is unclear for me how 4, 3 can be before 5, 2
    
    # result = []
    # while len(nums) > 0:
    #     temp = nums.pop(0)
    #     result = [(temp, num) for num in nums if (goal - temp == num)]
    #     if len(result) > 0:
    #         return result
    # return result

    result2 = ()
    for num in nums:
        temp = num
        for num in nums:
            if goal - temp == num:
                result2 = (temp, num)
                return result2
    return result2
