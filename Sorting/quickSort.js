/**
 * Created by harrisonmiller on 10/25/14.
 */

'use strict';

/**
 * The quicksort algorithm. It's complexity is O(nlog n).
 *
 * @public
 */
var quickSort = (function () {

    function compare(a, b) {
        return a - b;
    }

    /**
     * Partitions given subarray.
     *
     * @private
     * @param {array} array Input array
     * @param {number} left The start of the subarray
     * @param {number} right The end of the subarray
     */
    function partition(array, left, right, compare) {
        var cmp = array[right - 1],
            minEnd = left,
            maxEnd;
        for (maxEnd = left; maxEnd < right - 1; maxEnd += 1) {
            if (compare(array[maxEnd], cmp) < 0) {
                swap(array, maxEnd, minEnd);
                minEnd += 1;
            }
        }
        swap(array, minEnd, right - 1);
        return minEnd;
    }

    /**
     * Swap the places of two elements
     *
     * @private
     * @param {array} array The array which contains the elements
     * @param {number} i The index of the first element
     * @param {number} j The index of the second element
     * @returns {array} array The array with swaped elements
     */
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        return array;
    }

    /**
     * Sorts given array.
     *
     * @private
     * @param {array} array Array which should be sorted
     * @param {number} left The start of the subarray which should be handled
     * @param {number} right The end of the subarray which should be handled
     * @returns {array} array Sorted array
     */
    function quickSort(array, left, right, cmp) {
        if (left < right) {
            var p = partition(array, left, right, cmp);
            quickSort(array, left, p, cmp);
            quickSort(array, p + 1, right, cmp);
        }
        return array;
    }

    /**
     * Calls the quicksort function with it's initial values.
     *
     * @public
     * @param {array} array The input array which should be sorted
     * @returns {array} array Sorted array
     */
    return function (array, cmp) {
        cmp = cmp || compare;
        return quickSort(array, 0, array.length, cmp);
    };
}());



/**
 * Quicksort algorithm. It's with complexity O(n log(n)).
 * In this version of quicksort I use the middle element of the
 * array for pivot.
 */

(function (exports) {

    'use strict';

    function compare(a, b) {
        return a - b;
    }

    /**
     * Quicksort algorithm
     *
     * @public
     * @param {array} array Array which should be sorted.
     * @return {array} Sorted array.
     */
    var quickSort = (function () {

        /**
         * Partitions the array in two parts by the middle elements.
         * All elemnts which are less than the chosen one goes left from it
         * all which are greater goes right from it.
         *
         * @param {array} array Array which should be partitioned
         * @param {number} left Left part of the array
         * @param {number} right Right part of the array
         * @return {number}
         */
        function partition(array, left, right, cmp) {
            var pivot = array[Math.floor((left + right) / 2)],
                temp;
            while (left <= right) {
                while (cmp(array[left], pivot) < 0) {
                    left += 1;
                }
                while (cmp(array[right], pivot) > 0) {
                    right -= 1;
                }
                if (left <= right) {
                    temp = array[left];
                    array[left] = array[right];
                    array[right] = temp;
                    left += 1;
                    right -= 1;
                }
            }
            return left;
        }

        /**
         * Recursively calls itself with different values for
         * left/right part of the array which should be processed
         *
         * @private
         * @param {array} array Array which should be processed
         * @param {number} left Left part of the array which should be processed
         * @param {number} right Right part of the array which should be processed
         */
        function quicksort(array, left, right, cmp) {
            var mid = partition(array, left, right, cmp);
            if (left < mid - 1) {
                quicksort(array, left, mid - 1, cmp);
            }
            if (right > mid) {
                quicksort(array, mid, right, cmp);
            }
        }

        /**
         * Quicksort's initial point
         * @public
         */
        return function (array, cmp) {
            cmp = cmp || compare;
            quicksort(array, 0, array.length - 1, cmp);
            return array;
        };

    }());

    exports.quickSort = quickSort;

}(typeof exports === 'undefined' ? window : exports));









//3-way

    'use strict';

    /**
     * Effective inplace string sorting algorithm.
     * The algorithm is NOT stable.
     */
    var quicksort = (function () {

        function charAt(str, i) {
            return (i < str.length) ? str.charCodeAt(i) : -1;
        }

        function swap(arr, i, j) {
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }

        function quicksort(arr, lo, hi, d) {
            if (lo >= hi) {
                return;
            }
            var lowPointer = lo,
                highPointer = hi,
                p = charAt(arr[lo], d),
                i = lo + 1,
                current;

            while (i <= highPointer) {
                current = charAt(arr[i], d);
                if (current < p) {
                    swap(arr, i, lowPointer);
                    lowPointer += 1;
                } else if (current > p) {
                    swap(arr, i, highPointer);
                    highPointer -= 1;
                    i += 1;
                } else {
                    i += 1;
                }
            }

            quicksort(arr, lo, lowPointer - 1, d);
            if (p >= 0) {
                quicksort(arr, lowPointer, highPointer, d + 1);
            }
            quicksort(arr, highPointer + 1, hi, d);
        }

        return function sort(arr) {
            quicksort(arr, 0, arr.length - 1, 0);
            return arr;
        };
    }());


var quicksort = function(array) {
    'use strict';
    //base case
    if (array.length <= 1) return array;
    //now find swap position and value
    var swapPos = Math.floor((array.length-1)/2);
    var swapValue = array[swapPos], less = [], more = [];
    array = array.slice(0, swapPos).concat(array.slice(swapPos + 1));
    for(var i = 0; i < array.length; i++) {
        if (array[i] < swapValue) {
            less.push(array[i]);
        }
        else {
            more.push(array[i]);
        }
    }
    return (quicksort(less)).concat([swapValue], quicksort(more));
};