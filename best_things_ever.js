//includes the FS package for reading and writing packages
var fs = require('fs');
//running the readfile module thats inside of fs.
//store the read information into the variable "data"
fs.readFile('best_things_ever.txt', 'utf8', function(error,data){
	//break the string down by comma separation and store 
	var array = data.split(',');
	console.log('array', array);
});