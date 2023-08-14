#!/usr/bin/python3

def print_list_integer(my_list=[]):
    '''Print's all integers of a list.'''
    for e in range(len(my_list)):
        print("{:d}".format(my_list[e]))

