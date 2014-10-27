/**
 * Created by harrisonmiller on 10/25/14.
 */

/**
 * Bucket sort. This algorithm has complexity O(n) in case the
 * data is with uniform distribution.
 *
 * @public
 */
var bucketSort = (function () {
    'use strict';
    /**
     * Insertionsort.
     *
     * @private
     * @param {array} array Input array
     * @returns {array} array Sorted input array
     */
    function insertionSort(array) {
        var current,
            j;
        for (var i = 1; i < array.length; i += 1) {
            current = array[i];
            j = i - 1;
            while (j >= 0 && current < array[j]) {
                array[j + 1] = array[j];
                j -= 1;
            }
            array[j + 1] = current;
        }
        return array;
    }

    /**
     * Creates buckets for given array
     *
     * @private
     * @param {array} array Input array
     * @returns {array} buckets Array whith array for each bucket.
     *                          Each bucket contains an array with all elements
     *                          from the input which are with suitable size.
     */
    function createBuckets(array) {
        var buckets = [],
            currentBucket, current;
        for (var i = 0; i < array.length; i += 1) {
            current = array[i];
            currentBucket = Math.floor(current);
            buckets[currentBucket] = buckets[currentBucket] || [];
            buckets[currentBucket].push(current);
        }
        return buckets;
    }

    /**
     * Sorts the arrays from each bucket.
     *
     * @private
     * @param {array} buckets Given buckets
     * @returns {array} buckets Buckets with sorted arrays for each bucket
     */
    function sortBuckets(buckets) {
        for (var i = 0; i < buckets.length; i += 1) {
            if (buckets[i] !== undefined) {
                insertionSort(buckets[i]);
            }
        }
        return buckets;
    }

    /**
     * Unions all buckets' arrays
     *
     * @private
     * @param {array} buckets Input buckets
     * @returns {array} result Sorted array which contains
     *                         all elements form each bucket
     */
    function unionBuckets(buckets) {
        var result = [],
            currentBucket;
        for (var i = 0; i < buckets.length; i += 1) {
            currentBucket = buckets[i];
            if (currentBucket !== undefined) {
                result = result.concat(currentBucket);
            }
        }
        return result;
    }

    /**
     * Sorts given array with bucketsort
     *
     * @public
     * @param {array} array Input array which should be sorted
     * @returns {array} Sorted array
     */
    return function (array) {
        var buckets = createBuckets(array);
        sortBuckets(buckets);
        return unionBuckets(buckets);
    };
}());




//counting sort



/**
 * Counting sort algorithm. It's with complexity O(n) but it's
 * correct only for array of integers.
 *
 * @public
 */
var countingSort = (function () {
    'use strict';
    /**
     * Gets the count of the elements into the input array
     *
     * @private
     * @param {array} array The input array
     * @returns {array} count The count of each element from the input array
     */
    function getCount(array) {
        var count = [],
            current;
        for (var i = 0; i < array.length; i += 1) {
            current = array[i];
            count[current] = (count[current] || 0) + 1;
        }
        return count;
    }

    /**
     * Gets the count of the elements which are less than a given
     *
     * @private
     * @param {array} array The input array
     * @returns {array} less The count of the elements which
     *                       are less than each element from the input
     */
    function getLessCount(array) {
        var less = [],
            last;
        less[0] = array[0] || 0;
        for (var i = 1; i < array.length; i += 1) {
            last = array[i - 1] || 0;
            less[i] = last + less[i - 1];
        }
        return less;
    }

    /**
     * Sorts the input array
     *
     * @private
     * @param {array} array Input which should be sorted
     * @param {array} less Count of the less elements for each element
     * @returns {array} result The sorted input
     */
    function sort(array, less) {
        var result = [],
            currentPositions = [],
            current,
            position;
        for (var i = 0; i < array.length; i += 1) {
            current = array[i];
            position = less[current];
            if (currentPositions[current] === undefined) {
                currentPositions[current] = position;
            }
            result[currentPositions[current]] = current;
            currentPositions[current] += 1;
        }
        return result;
    }

    /**
     * Sorts a given array
     *
     * @public
     * @param {array} array Array which should be sorted
     * @returns {array} array Sorted array
     */
    return function (array) {
        var less = getLessCount(getCount(array));
        return sort(array, less);
    };
}());
