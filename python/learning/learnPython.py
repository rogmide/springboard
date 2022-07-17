# print("hello world".__len__())

vegan_no_nos = ["eggs", "meat", "milk", "fish"]
pie_ingre = ['flour', 'apples', 'sugar', 'eggs', 'salt']
nums = list(range(0, 100))
a = nums[90::2]

chicken = {
    'name': 'lady gray',
    'breed': 'silkie',
    'total_egg_count': 12,
    'egg_chart': {
        'M': True,
        'T': True,
        'W': True,
        'TH': True,
        'F': True,
        'S': False,
        'SU': True
    },
    'coop_mates': ['Butters', 'Stevie', 'Henry']
}

# working with dictionaries

# for key in chicken.keys():
#     print(key)
# for val in chicken.values():
#     print(val)
# for pair in chicken.items():
#     print(pair)
# for (key, value) in chicken.items():
#     print(key, "------>", value)

# Core API for Dictionaris

# d.copy()
# d.get(x, default)
# d.items()
# d.keys()
# d.values()

# To add in dict = d['name'] = 'something'

# set are faster than anything else

languages = {'javascript', 'python', 'ruby'}

lemon = {'bumby', 'fruit', 'sour', 'yellow'}
bannana = {'fruit', 'smooth', 'sweet', 'yellow'}
orange = ['fruit', 'bumpy', 'orange', 'sweet']

# In [142]: lemon | bannana
# Out[142]: {'bumby', 'fruit', 'smooth', 'sour', 'sweet', 'yellow'}

# In [143]: lemon & bannana
# Out[143]: {'fruit', 'yellow'}

# In [145]: lemon - bannana
# Out[145]: {'bumby', 'sour'}

# In [148]: lemon ^ bannana
# Out[148]: {'bumby', 'smooth', 'sour', 'sweet'}

# some sample what we can do with the stuff before
# for adj in bannana | lemon | set(orange):
#     print(adj)

# Using Tuples as a key in a dictionaries

board = {
    (0, 0): 'X',
    (0, 1): None,
    (0, 2): '0',
    (1, 0): 'X',
    (1, 1): '0',
}

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
other_nums = list(range(1, 20))

# for num in nums:
#     if num % 2 == 0:
#         print(num)

# # so interesting [num for num in nums if num % 2 == 1]
# THIS IS NICE LOOK LOOK LOOK

# print([num for num in nums if num % 2 == 1])
# print([num * 2 for num in nums])
# [what_to_append for thing in list] LOOK LOOK


def gen_board(size, initial_val=None):
    return [[initial_val for x in range(size)] for y in range(size)]

# In [222]: gen_board(5)
# Out[222]:
# [[None, None, None, None, None],
#  [None, None, None, None, None],
#  [None, None, None, None, None],
#  [None, None, None, None, None],
#  [None, None, None, None, None]]

# In [223]: gen_board(5, False)
# Out[223]:
# [[False, False, False, False, False],
#  [False, False, False, False, False],
#  [False, False, False, False, False],
#  [False, False, False, False, False],
#  [False, False, False, False, False]]

# Sample
# something = [some["name"] for some in someList if some["sex"] == 'Male']
# [do_this if something else do this for thing in things]
# grades = ['PASS' if score >= 70 else 'FAIL' for score in scores]


# {day for day in 'MTWRFSU'}
# {day:0 for day in 'MTWRFSU'}

# for else me need to change the format of the line
double_with_condition = {num: num * num for num in range(1, 10) if num % 2 == 0}
double_simple = {num: num * num for num in range(1, 10)}
char = {char for char in 'hello darkness my of friend'}
char2 = {char for char in 'hello darkness my of friend'if char in 'aeiou'}
char3 = {char for char in 'hello darkness my of friend'if char not in 'aeiou'}
