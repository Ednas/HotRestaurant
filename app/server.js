var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// require our waiting list and reservations arrays
var tableData = require('./data/table-data.js').table_reservations;

var waitListData = require('./data/waitinglist-data.js').waitList;



//require html-routes

	app.use(express.static('public'));

require('./routing/html-routes.js')(app);

require('./routing/api-routes.js').apimodules(app, tableData, waitListData);



app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})