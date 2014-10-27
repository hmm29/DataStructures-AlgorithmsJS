/**
 * Created by harrisonmiller on 10/26/14.
 */

function isAnagramPair(string1, string2) {
    if (string1.length !== string2.length) return -1;

    var string1 = string1.split('').sort().join('');
    var string2 = string2.split('').sort().join('');

    return string1 === string2;
}



