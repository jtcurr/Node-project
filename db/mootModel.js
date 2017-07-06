var mongoose = require('mongoose');

var mootSchema = new mongoose.Schema({
	name: String,
	size: Number,
	badnessLevel: String
})

mongoose.model('Moot', mootSchema);