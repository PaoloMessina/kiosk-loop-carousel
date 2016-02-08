var appRouter = function(app) {

	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});

	app.get("/getList", function(req, res) {
		res.send("Hello World");
	});

	app.post("/setList", function(req, res) {
		var fs = require('fs');

		console.log(req.body);

		var bodyTemplate = "angular.module('carouselApp.dev', [])\n\t.constant('CONFIG', {\n\t\tinterval: @INTERVAL@,\n\t\tcarouselTextColor: '@CAROUSEL_TEXT_COLOR@',\n\t\tcarouselBackgroundColor: '@CAROUSEL_BACKGROUND_COLOR@',\n\t\tlist: [@LIST@]\n});";
		var listItemTemplate = "\n\t\t\t{\n\t\t\t\timage: '@IMAGE@',\n\t\t\t\ttext: '@TEXT@',\n\t\t\t\tindex: @ID@\n\t\t\t}";

		//TODO: get json in post
		//var jsonString = '[{"image":"", "text": "prova 1", "index": 1}, {"image":"", "text": "prova 2", "index": 2}, {"image":"", "text": "prova 3", "index": 3}, {"image":"", "text": "prova 4", "index": 4}]';
		//var jsonArray = JSON.parse(jsonString);
		var jsonArray = req.body.list;

		var list = "";
		jsonArray.forEach(function(item, idx, array) {
			var itemString = listItemTemplate.replace("@IMAGE@", item.image).replace("@TEXT@", item.text).replace("@ID@", item.index);
			list = list + itemString;
			if(idx !== array.length - 1){
				list += ",";
			}
		});

		var documentBody = bodyTemplate.replace("@LIST@", list);
		documentBody = documentBody.replace('@INTERVAL@', req.body.interval ? req.body.interval : 3000);
		documentBody = documentBody.replace('@CAROUSEL_TEXT_COLOR@', req.body.carouselTextColor ? req.body.carouselTextColor : '#FFFFFF');
		documentBody = documentBody.replace('@CAROUSEL_BACKGROUND_COLOR@', req.body.carouselBackgroundColor ? req.body.carouselBackgroundColor : '#000000');

		fs.writeFile("app/scripts/config/config.js", documentBody, function(err) {
			if(err) {
				return console.log(err);
			}

			console.log("The file was saved!");
		});
		res.send(documentBody);
	});

}

module.exports = appRouter;
