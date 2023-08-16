#!/usr/bin/python3

def divisible_by_2(my_list=[]):
    '''Function find's all multiples of 2 in a list.'''
    multiples = []
    for e in range(len(my_list)):
        if my_list[e] % 2 == 0:
            multiples.append(True)
        else:
            multiples.append(False)

    return (multiples)
