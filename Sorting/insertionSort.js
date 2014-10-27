/**
 * Created by harrisonmiller on 10/7/14.
 */
'use strict';

function compare(a, b) {
    return a - b;
}

/**
 * Insertionsort algorithm. It's complexity is O(n^2).
 *
 * @public
 * @param {array} array Input array
 * @returns {array} array Sorted array
 */
function insertionSort(array, cmp) {
    cmp = cmp || compare;
    var current,
        j;
    for (var i = 1; i < array.length; i += 1) {
        current = array[i];
        j = i - 1;
        while (j >= 0 && cmp(array[j], current) > 0) {
            array[j + 1] = array[j];
            j -= 1;
        }
        array[j + 1] = current;
    }
    return array;
}


//insertion binary sort
'use strict';

function comparator(a, b) {
    return a - b;
}

/**
 * Modified version of insertionsort. It uses binary search for finding
 * where the current element should be inserted. It's correct because
 * the binary search looks just in the first part of the array
 * which is actually sorted. It's complexity is O(n^2)
 *
 * @public
 * @param {array} array Input array
 * @param {array} array Sorted array
 */
function insertionBinarySort(array, cmp) {
    cmp = cmp || comparator;
    var current,
        middle,
        left,
        right;
    for (var i = 1; i < array.length; i += 1) {
        current = array[i];
        left = 0;
        right = i;
        middle = Math.floor((left + right) / 2);
        while (left <= right) {
            if (cmp(array[middle], current) <= 0) {
                left = middle + 1;
            } else if (cmp(array[middle], current) > 0) {
                right = middle - 1;
            }
            middle = Math.floor((right + left) / 2);
        }
        for (var j = i; j > left; j -= 1) {
            array[j] = array[j - 1];
        }
        array[j] = current;
    }
    return array;
}



//recursive insertion sort

'use strict';

function compare(a, b) {
    return a - b;
}

/**
 * Recursive version of insertionsort. Complexity O(n^2).
 *
 * @public
 * @param {array} array Input array
 * @param {number} [max] Index of the element which place we should find
 *                       in the current function call
 */
function recursiveInsertionSort(array, cmp, max) {
    cmp = cmp || compare;
    if (max <= 0) {
        return array;
    }
    if (max === undefined) {
        max = array.length - 1;
    }
    recursiveInsertionSort(array, cmp, max - 1);
    for (var i = max - 1, current = array[max];
         i >= 0 && cmp(current, array[i]) < 0; i -= 1) {
        array[i + 1] = array[i];
    }
    array[i + 1] = current;
    return array;
}




//shell sort

'use strict';


function compare(a, b) {
    return a - b;
}

/**
 * Shellsort
 *
 * Shellsort uses the gaps 701, 301, 132, 57, 23, 10, 4, 1 and uses
 * insertion sort to sort the sub-arrays which match for the different gaps.
 */
var shellSort = (function () {

    var gaps = [701, 301, 132, 57, 23, 10, 4, 1];

    /**
     * Shellsort which uses the gaps in the lexical scope of the IIFE.
     *
     * @public
     * @param {array} array Array which should be sorted
     * @return {array} Sorted array
     */
    return function (array, cmp) {
        cmp = cmp || compare;

        var gap, current;
        for (var k = 0; k < gaps.length; k += 1) {
            gap = gaps[k];
            for (var i = gap; i < array.length; i += gap) {
                current = array[i];
                for (var j = i;
                     j >= gap && cmp(array[j - gap], current) > 0; j -= gap) {
                    array[j] = array[j - gap];
                }
                array[j] = current;
            }
        }
        return array;
    };

}());