#!/usr/bin/python3
'''Defines object attribute lookup function.'''


def lookup(obj):
    '''Function return  the list of available attributes and methods of an object.'''
    return (dir(obj))
