#!/usr/bin/env node

var fs = require('fs');
var documentBody;

console.log("Start backup!");

fs.readFile('/home/pi/carousel/kiosk-loop-carousel/app/scripts/config/config.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  if(data && data != "")
  	documentBody = data;
  	
  if(documentBody){
		fs.writeFile("/home/pi/carousel/kiosk-loop-carousel/app/scripts/config/config.js", documentBody, function(err) {
			if(err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		});
	}
});

console.log("end backup!");


