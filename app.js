var express = require('express');
var bodyParser = require('body-parser');
var app = express();
require('./db/db.js');
require('./db/mootModel.js');
var mootController = require('./db/mootController.js');

var port = process.env.PORT || 3000;
app.use(express.static(__dirname));

app.use(bodyParser());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})

app.get('/theMoots/', function(req, res) {
	res.sendFile(__dirname + '/theMoots.html');
})

app.get('/getAllTheMoots', function(req, res) {
	mootController.retreiveAllMoots(req, res);
})

app.post('/addMoot', function(req, res) {
	res.sendFile(__dirname + '/index.html');
	mootController.addMoot(req, res);
})

app.delete('/deleteMoot', function(req, res) {
	mootController.removeMoot(req, res);
})

app.put('/updateMoot', function(req, res) {
	mootController.updateMoot(req, res);
})

app.listen(port);