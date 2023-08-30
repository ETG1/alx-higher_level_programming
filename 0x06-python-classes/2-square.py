#!/usr/bin/python3
'''Defines a class Square.'''


class Square:
    '''Square representation.'''

    def __init__(self, size=0):
        '''A private instance attribute: size
        size must be an integer,: TypeError
        if size is less than 0,: ValueError'''
        self.__size = size
        if not isinstance(size, int):
            raise TypeError('size must be an integer')
        if size < 0:
            raise ValueError('size must be >= 0')
