#!/usr/bin/python3
'''Defines class-checking function.'''


def is_same_class(obj, a_class):
    '''Returns true if object is an instance of the
    class, otherwise return false.'''

    if type(obj) == a_class:
        return True
    return False
