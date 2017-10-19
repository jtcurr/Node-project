var express = require('express');
var bodyParser = require('body-parser');
var app = express();

require('./db/mootModel.js');
var mootController = require('./db/mootController.js');

var port = process.env.PORT || 3000;
app.use(express.static(__dirname));

app.use(bodyParser());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})


app.delete('/deleteMoot', function(req, res) {
	mootController.removeMoot(req, res);
})

app.post('/updateMoot', function(req, res) {
	mootController.updateMoot(req, res);
})

app.listen(port);
