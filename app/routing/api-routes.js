
exports.apimodules = function(app){

	app.post('/api/tables', function(req, res){
		/*var newWait = req.body;

		console.log(newWait);

		waitList.push(newWait);

		res.json(newWait);*/

	});

	app.post('/api/waitlist', function(req, res){
		var newWait = req.body;

		console.log(newWait);

		waitList.push(newWait);

		res.json(newWait);
	});

}