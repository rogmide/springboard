import helpers
# from helpers import get_rand_year, get_rand_month
def make_people(name, favColor):
    return {
        'name': name,
        'favColor': favColor,
        'birth_year': helpers.get_rand_year(),
        'birth_month': helpers.get_rand_month()
    }