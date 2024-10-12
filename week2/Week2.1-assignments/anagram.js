/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

const str1='aditya'
const str2='buttan'

function isAnagram(string1,string2){
    if(string1.length!=string2.length){
        return false;
    }


    //******helper function that sort string... */

    function sortstr(str){
        return str.toLowerCase().split('').sort().join('')
    }
    //Using split and join is necessary because the sort method works on arrays, not strings. By splitting the string into an
    // array of characters, you can sort them and then join them back into a string.

    return (sortstr(string1)===sortstr(string2))
   
}

console.log(isAnagram(str1,str2));

