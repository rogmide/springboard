color_pair = [['red', 'blue'], ['green', 'agua']]
key_val = {
    'A': 10,
    'B': 20,
    'C': 30,
    'D': 40
}

((pair1), (pair2)) = color_pair
# print(pair1, pair2)

# unpaking a dictionary
# for (k, v) in key_val.items():
#     print(k, v)

spread = {*key_val}  # result {'A', 'B', 'C', 'D'} is a Set
spread2 = {**key_val}  # result {'A': 10, 'B': 20, 'C': 30, 'D': 40} with 2 **
# return a dictionary

# Error Handeling

person_data = {'name': 'kitty', 'age': 10}


def get_days_alive(person):
    try:
        days = person['age'] * 365
        print(f'{person["name"]} Day Alive: {days}')
    except KeyError as exc:  # Like this
        print('Missing Key ', exc)
    except TypeError:
        print('Should be a Dictionary')



# next to function are to show how we handle erros
# by using raise in the first function when we call the sec function and 
# the error
# trigger the error that we see is 'Outside bounds of 1-100'
# you can use doct for testing the code
def bounded_avg(nums):
    '''
    returns avg of a list of nums between 1 and 100

    >>> bounded_avg([2,4,6])
    4.0

    >>> bounded_avg([10, 20, 30, 40, 50])
    30.0
    '''
    for n in nums:
        if n < 1 or n > 100:
            raise ValueError('Outside bounds of 1-100')
    return sum(nums) / len(nums)

def handle_data():
    ages = [10, 20, 34, 454]
    try:
        avg = bounded_avg(ages)
        print(f'Avg was:  {avg}')
    except ValueError as exc:
        print(f'Error: {exc}' )

