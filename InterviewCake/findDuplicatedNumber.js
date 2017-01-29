function findDuplicatedNumber(array) {
    // todo: make sure an array is passed in
    if(!Array.isArray(array)) return -1;
    
    // do nothing if array is empty
    if(!array.length) return "array is empty";
    
    // highest element in array should be one less than array length
    let maxElement = array.length-1;
    
    // calculate expected sum of elements without duplicate element
    let sumOfElementsWithoutDuplicates = (maxElement*(maxElement+1))/2;
    
    // initiatilize variable to hold sum of array elements
    let sumOfArrayElements = 0;
    
    // iterate through the array, adding the elements to the sum counter
    for(let i = 0; i < array.length; i++) {
     	sumOfArrayElements += array[i];   
    }
    
    // calculate difference between sum of array elements and sum of array with all unique elements
    let result = sumOfArrayElements - sumOfElementsWithoutDuplicates;
    
    // if the result is equal to maxElement+1, then there is no duplicate
    if(result === maxElement + 1) return "no duplicates";
    
    // if result higher than this, then we're missing a number between 1 and n
    else if (result > maxElement + 1) return "not every number 1 to n is in this array";
    
    // else, return the duplicated element
    else return result;
 }

console.log(findDuplicatedNumber([1,2,2,3,4,5]));
// 2
