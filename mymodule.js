module.exports = function(directory, extension, callback) {
	var fs = require('fs');
	
	fs.readdir(directory, function(err, list) {
		if (err) {
			return callback(err);
		}
		
		var result = [];
	
		for (var i = 0; i < list.length; i++) {
			var file = list[i].split('.');
			
			if (file[1] === extension)
				result.push(list[i]);
		}
		
		return callback(null, result);
	});
};