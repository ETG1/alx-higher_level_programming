#!/usr/bin/python3

def max_integer(my_list=[]):
    '''Function find's the biggest integer of a list.'''
    if len(my_list) == 0:
        return (None)

    biggest = my_list[0]
    for e in range(len(my_list)):
        if my_list[e] > biggest:
            biggest = my_list[e]

    return (biggest)

