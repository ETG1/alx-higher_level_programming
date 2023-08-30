#!/usr/bin/python3
'''Defines a class Square.'''


class Square:
    '''Square representation.'''

    def __init__(self, size=0):
        '''A private instance attribute: size
        size must be an integer,: TypeError
        if size is less than 0,: ValueError'''
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size

    def area(self):
        '''Return the current area of the square.'''
        return self.__size * self.__size
