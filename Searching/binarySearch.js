/**
 * Created by harrisonmiller on 10/25/14.
 */
function binarySearch( sortedValues, target ){
    // summary:
    //    Performs a binary search on an array of sorted
    //    values for a specified target.
    // sortedValues: Array
    //    Array of values to search within.
    // target: String|Number
    //    Item to search for, within the sortedValues array.
    // returns:
    //    Number or null. The location of the target within
    //    the sortedValues array, if found. Otherwise returns
    //    null.

    // define the recursive function.
    function search( low, high ) {
        // If the low index is greater than the high index,
        //  return null for not-found.
        if ( low > high ) {
            return null;
        }

        // If the value at the low index is our target, return
        //  the low index.
        if ( sortedValues[low] === target ){
            return low;
        }

        // If the value at the high index is our target, return
        //  the high index.
        if ( sortedValues[high] === target ){
            return high;
        }

        // Find the middle index and median element.
        var middle = Math.floor( ( low + high ) / 2 );
        var middleElement = sortedValues[middle];

        // Recursive calls, depending on whether or not the
        //  middleElement is less-than or greater-than the
        //  target.
        // Note: We can use high-1 and low+1 because we've
        //  already checked for equality at the high and low
        //  indexes above.
        if ( middleElement > target ) {
            return search(low+1, middle);
        } else if ( middleElement < target ) {
            return search(middle, high-1);
        }

        // If middleElement === target, we can return that value.
        return middle;
    }

    // Start our search between the first and last elements of
    //  the array.
    return search(0, sortedValues.length-1);
}







var binarySearch = (function () {
    /**
     * Binary search.
     *
     * @pivate
     * @param {array} array Array where we should find the index of the element
     * @param {number} key Key of the element which index should be found
     * @param {number} left Left index
     * @param {number} right Right index
     * @returns {number} index The index of the element or -1 if not found
     *
     */
    function recursiveBinarySearch(array, key, left, right) {
        if (left > right) {
            return -1;
        }
        var middle = Math.floor((right + left) / 2);
        if (array[middle] === key) {
            return middle;
        } else if (array[middle] > key) {
            return recursiveBinarySearch(array, key, left, middle - 1);
        } else {
            return recursiveBinarySearch(array, key, middle + 1, right);
        }
    }

    /**
     * Calls the binary search function with it's initial values.
     *
     * @param {array} array The input array
     * @param {number} key The key of the element which index should be found
     * @returns {number} index The index of the element or -1 if not found
     */
    return function (array, key) {
        return recursiveBinarySearch(array, key, 0, array.length);
    };

}());










function binarySearch(array, key) {
    var middle = Math.floor(array.length / 2),
        left = 0,
        right = array.length;
    while (right >= left) {
        if (array[middle] === key) {
            return middle;
        } else if (array[middle] > key) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    return -1;
}