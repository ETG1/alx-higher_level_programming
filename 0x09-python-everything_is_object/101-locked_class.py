#!/usr/bin/python3
'''Define's a locked class'''


class LockedClass:
    '''
    Only allows instatiation of an attribute first_name
    '''

    __slots__ = ["first_name"]
