var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var reservations = [

{
	tableNumber: 1,
	name: "",
	phoneNumber: "",
	email: ""

},

{
	tableNumber: 2,
	name: "",
	phoneNumber: "",
	email: ""

},
{
	tableNumber: 3,
	name: "",
	phoneNumber: "",
	email: ""

},
{
	tableNumber: 4,
	name: "",
	phoneNumber: "",
	email: ""

},
{
	tableNumber: 5,
	name: "",
	phoneNumber: "",
	email: ""

}
];

var waitList = [
{
	waitNumber: 1,
	name: "",
	phoneNumber: "",
	email: ""

},

{
	waitNumber: 2,
	name: "",
	phoneNumber: "",
	email: ""

},
{
	waitNumber: 3,
	name: "",
	phoneNumber: "",
	email: ""

},
{
	waitNumber: 4,
	name: "",
	phoneNumber: "",
	email: ""

},
{
	waitNumber: 5,
	name: "",
	phoneNumber: "",
	email: ""

}
];

//require html-routes

	app.use(express.static('public'));

require('./routing/html-routes.js')(app);

require('./routing/api-routes.js').apimodules(app);



app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})