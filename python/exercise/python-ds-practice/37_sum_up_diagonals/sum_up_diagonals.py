def sum_up_diagonals(matrix):
    """Given a matrix [square list of lists], return sum of diagonals.

    Sum of TL-to-BR diagonal along with BL-to-TR diagonal:

        >>> m1 = [
        ...     [1,   2],
        ...     `[30, 40],
        ... ]
        >>> sum_up_diagonals(m1)
        73

        >>> m2 = [
        ...    [1, 2, 3],
        ...    [4, 5, 6],
        ...    [7, 8, 9],
        ... ]
        >>> sum_up_diagonals(m2)
        30
    """

    # Temporary variable to hold the diagonals value of the matrix
    # then return sum(temp) for the result
    temp = []
    for x in range(0, len(matrix)):
        for y in range(0, len(matrix)):
            if x == y:
                temp.append(matrix[x][y])
            if x + y == (len(matrix) - 1):
                temp.append(matrix[x][y])    
    return (sum(temp))
        