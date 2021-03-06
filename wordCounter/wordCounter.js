/*
From given file, return all unique words with their counts.
Do not include commas, spaces, double quotes..etc but you can keep 
the apostrophes to avoid complexities.

Example>>
input: "I've scars – is an incredibly humbling experience,\” Ambrose said."

output: 
{
	"I've"       :1,
	"scars"      :1,
	"is"         :1,
	"an"         :1,
	"incredibly" :1,
	"humbling"   :1,
	"experience" :1,
	"Ambrose"    :1,
	"said"       :1
}

Run the file using Node
$ node wordCounter.js

You can check your output with http://www.writewords.org.uk/word_count.asp
*/

fs = require('fs');

var readFile = function (){
  var contents = fs.readFileSync("./news.txt").toString();
  return contents;
};

var seperate = function(){
	var tempArray;
	var arrayOfWords = readFile().trim().split('/').join(' ').split('?').join(' ').split('@').join(' ').split(',').join(' ').split('.').join(' ').split('-').join(' ').split('"').join(' ').split('\n').join(' ').toLowerCase().split(' ');
	var objectOfWords = {};
	for(var i = 0; i < arrayOfWords.length; i++){
		if(arrayOfWords[i] === ''){continue;}
		if(objectOfWords[arrayOfWords[i]]){
			objectOfWords[arrayOfWords[i]]++;
		} else {
			objectOfWords[arrayOfWords[i]] = 1;
		}
	}
	console.log(objectOfWords);
}
seperate();
