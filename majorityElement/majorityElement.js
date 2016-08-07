/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/


// That is O(N)
var findAll = function(arr){
 var object = {};
 for(var i = 0; i < arr.length ; i++){
 	if(object[arr[i]]){
 		object[arr[i]]++;
 	} else {
 		object[arr[i]] = 0;
 		object[arr[i]]++;
 	}
 }
 var result = [];
 for(var key in object){
 	if(object[key] >= 3){
 		result.push(JSON.parse(key));
 	}
 }
 return result;
}