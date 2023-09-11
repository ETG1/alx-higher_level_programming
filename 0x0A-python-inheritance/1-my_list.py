#!/usr/bin/python3
'''Defines inherited list class MyList.'''


class MyList(list):
    '''A class that inherits from list'''

    def print_sorted(self):
        '''prints a sorted list(ascending sort)'''
        print(sorted(self))
