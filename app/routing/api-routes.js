
exports.apimodules = function(app, tableData, waitListData){
//module.exports = function(app, tableData, waitListData){


	app.get('/api/tables', function(req, res){

		res.json(tableData);

	});

	app.get('/api/waitlist', function(req, res){

		res.json(waitListData);

	});

	app.post('api/tables', function(req, res){

		for(var i=0; i < reservations.length; i++){

			if(reservations[i].reserved == false){

				tableData.push(req.body);
				return res.json(true);

			}

		}

		waitListData.push(req.body);
		return res.json(false);

	});



/*	app.post('/api/waitlist', function(req, res){
		var newWait = req.body;

		console.log(newWait);

		waitList.push(newWait);

		res.json(newWait);
	});*/

}