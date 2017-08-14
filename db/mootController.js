var mongoose = require('mongoose');
var Moot = mongoose.model('Moot');

function createMoot(name, size, badLevel, res) {
		Moot.create({
		name: name,
		size: size,
		badnessLevel: badLevel
	}, function(err, user) {
		if(err) {
			res
				.status(400)
				.json(err)
			console.log(err)
		} else {
			console.log('good')
			res.status(200);
		}
	})
}

module.exports.retreiveAllMoots =  function(req, res) {
	Moot.find().exec(function(err, data){
			if(err) {
				console.log(err)
			} else {
				res.json(data);
			}
		});
}

module.exports.addMoot = function(req, res) {
	createMoot(req.body.name, req.body.size, req.body.level, res);
}

module.exports.removeMoot = function(req, res) {
	Moot.remove({name: req.body.name}, function(err) {
		if(err) {
			console.log('!!!!!', err)
		} else {
			res.status(200).send({ message: "Moot removed" });
		}
	})
}
