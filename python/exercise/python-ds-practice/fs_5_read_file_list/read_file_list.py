from pathlib import Path
import os


def read_file_list(filename):
    """Read file and print out each line separately with a "-" before it.

    For example, if we have a file, `dogs`, containing:
        Fido
        Whiskey
        Dr. Sniffle

    This should work:

        >>> read_file_list("dogs")
        - Fido
        - Whiskey
        - Dr. Sniffle

    It will raise an error if the file cannot be found.
    """

    # hint: when you read lines of files, there will be a "newline"
    # (end-of-line character) at the end of each line, and you want to
    # strip that off before you print it. Do some research on that!

    # with open(f"/Users/rogmide/Desktop/springboard/python/exercise/python-ds-practice/fs_5_read_file_list/{filename}") as f:

    file_path = os.getcwd()
    with open(file_path + '/fs_5_read_file_list/'f'{filename}') as file:
        lines = file.readlines()

    for i in range(0, len(lines)):
        if i != len(lines) - 1:
            print(lines[i][:-1:])
    print(lines[-1])
