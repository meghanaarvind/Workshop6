//imports the express Node module
var express = require('express')
//creates an express server
var app = express();

//import reverseString
var util = require('./util');
var reverseString = util.reverseString;

var bodyParser = require('body-parser');



//starts the server on port 3000:
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});


app.use(bodyParser.text());


// You run the server from `server`, so `../client/build` is `server/../client/build`.
// '..' means "go up one directory", so this translates into `client/build`!
app.use(express.static('../client/build'));
