var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', function(error,data){
	var array = data.split(',');
	console.log('array', array);
});