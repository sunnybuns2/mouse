//Problem 1
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//-MY SOLUTION-
//input=array
//output=booleon
//if array contains any duplicates, then return true
//if not, return false
//for each item, return each original character
//original against new array.. check size of new array vs old array, then return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const noDupes = new Set(nums);
  return noDupes.size !== nums.length;
};

//This wasnt the most effective solution, but it works. 

//Problem 2
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//-MY SOLUTION-
//input s and t
//output booleon
//create an array from each string
//sort both arrays alphabetically
//once both sorted, compare the two to see if they're the same

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

//*Notes:  Keep big o notation and time complexity in mind.

//Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

//Problem 3
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//-MY SOLUTION-
//input array and target
//output return indices of two numbers

//use a hashtable to pair up the numbers(value,index(which is also the key)) and check if the target exists within the solution.
//when the solution is found, output the indices

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++){
      var value = nums[i];
      var complementPair = target - value;
      if(map[complementPair] !== undefined){
          return [map[complementPair], i];
      } else {
          map[value] = i;
      }
  }
};

//I wasnt able to find the solution for this one. 
//Instead, I had to look up the step by step tutorial outlining how to solve it. 
//originally i thought about bruteforcing the answer, but i realize that it takes up more time



