#!usr/bin/node

exports.nbOccurrences = function(list, searchElement) {
    const occurrences = list.reduce(function(count, element) {
        return count + (element === searchElement);
    }, 0);

    return occurrences;
};
