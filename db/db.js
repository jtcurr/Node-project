var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/moothotel';

mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
	console.log('Mongoose connected on ' + dburl);
})