def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?

        >>> same_frequency(551122, 221515)
        True

        >>> same_frequency(321142, 3212215)
        False

        >>> same_frequency(1212, 2211)
        True
    """
    '''
         I don't understan this exercise very well
         So what I trying to do here is:

         Cheking that num1 and num2 has the same 
         amount of individual numbers

         Sample: 
         num1 = 551122
         num2 = 221515

         num1 has 2 number 5  and num2 has 2 number 5
              has 2 number 1           has 2 number 1
              has 2 number 2           has 2 number 2
        
        Return True, both number has the came amount of the same number
     
    '''

    # convert num1, num2 to string so i can iterate
    str_num1 = str(num1)
    str_num2 = str(num2)

    if len(str_num1) >= len(str_num2):
        for i in range(len(str_num1)):
            if str_num1.count(str_num1[i]) != str_num2.count(str_num1[i]):
                return False
        return True
    for i in range(len(str_num2)):
        if str_num1.count(str_num2[i]) != str_num2.count(str_num2[i]):
            return False
    return True
