#!/usr/bin/python3
'''Defines text file-reading function.'''

def read_file(filename=""):
    '''Prints contents of a UTF8 text file.'''
    with open(filename, encoding="utf-8") as f:
        print(f.read(), end="")
