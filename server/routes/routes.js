var appRouter = function(app) {

	app.get("/getList", function(req, res) {
		res.send("Hello World");
	});

	app.post("/setList", function(req, res) {
		var fs = require('fs');

		console.log(req);

		var bodyTemplate = "angular.module('carouselApp.dev', [])\n\t.constant('CONFIG', {\n\t\tlist: [@LIST@]\n});";
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
