if (typeof define !== 'function') { var define = require('amdefine')(module); }
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
    function listFiles(data, dirName) {
        
    }
    
    function permute(arr) {
    
    }
    
    return {
        listFiles: listFiles,
        permute: permute
    };
});
