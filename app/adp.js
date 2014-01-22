if (typeof define !== 'function') { var define = require('amdefine')(module); }
// write a function fizzbuzz that receives a number as its argument;
// if the number is divisible by 3, the function should return 'fizz';
// if the number is divisible by 5, the function should return 'buzz';
// if the number is divisible by 3 and 5, the function should return
// 'fizzbuzz';
//
// otherwise the function should return the number, or false if no number
// was provided or the value provided is not a number

/*
-you should be able to return a list of files from the data-
listFiles, when given a single argument, 
should return a list of all filenames in
all nested instances of a key called files
from the data value passed to it

-you should be able to return a list of files in a subdir-
listFiles, when given 2 arguments, 
should return a list of all filenames in
all nested instances of a key called files
from the data value passed to it whose
sibling key 'dir' takes the value given in the
second argument passed to listFiles

-you should be able to return the permutations of an array-
permute should take an array and output and array or arrays
with each permutation possible for the values in the given 
array
*/

define(function() {
    function fizzBuzz(num) {
        
    }
    
    function listFiles(data, dirName) {
        
    }
    
    function permute(arr) {
    
    }
    
    return {
        fizzBuzz : fizzBuzz,
        listFiles: listFiles,
        permute: permute
    };
});