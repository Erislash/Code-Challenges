'''
isinstance()
    isinstance(object, classinfo)

    object - object to be checked
    classinfo - class, type, or tuple of classes and types

    The isinstance() function checks if the object (first argument) is an instance or subclass of classinfo class (second argument).

    https://www.programiz.com/python-programming/methods/built-in/isinstance
'''


def solution(string, ending):
    stringLen = len(string)
    endingLen = len(ending)

    if not isinstance(string, str) or not isinstance(ending, str):
        raise TypeError("Only strings are allowed")
    if endingLen > stringLen: return False

    return string[stringLen - endingLen : stringLen] == ending


# test.assert_equals(solution('abcde', 'cde'), True)
# test.assert_equals(solution('abcde', 'abc'), False)
# test.assert_equals(solution('abcde', ''), True)
