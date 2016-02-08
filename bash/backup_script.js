#!/usr/bin/env node

var fs = require('fs');
var documentBody;
fs.readFile('../app/scripts/config/config.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  if(data && data != "")
  	documentBody = data;
  	
  if(documentBody){
		fs.writeFile("../app/scripts/config/config_bck.js", documentBody, function(err) {
			if(err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		});
	}
});


