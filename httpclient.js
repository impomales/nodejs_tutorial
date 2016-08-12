
var http = require('http');
var bl = require('bl');
var result = [];
var count = 0;

var myGet = function(index) {
	http.get(process.argv[index + 2], function(response) {
	response.pipe(bl(function(err, data) {
		if (err) return console.error(err);
		var str = data.toString();		
		result[index] = str;
		count++;
		
		if (count === 3) {
			result.forEach(function(d) {
				console.log(d);
			});
		}
	}))});	
};

for (var i = 0; i < 3; i++) 
	myGet(i);