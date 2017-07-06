var mongoose = require('mongoose');
var Moot = mongoose.model('Moot');

function createMoot(name, size, badLevel) {

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
		Moot.create({
		name: req.body.name,
		size: req.body.size,
		badnessLevel: req.body.level
	}, function(err, user) {
		if(err) {
			console.log('all badLevel')
			res
				.status(400)
				.json(err)
			console.log(err)
		} else {
			console.log('good')
			res.status(200).send({ error: "boo:(" });
		}
	})
}

module.exports.removeMoot = function(req, res) {
	console.log(req.body);
	Moot.remove({name: req.body.name}, function(err) {
		if(err) {
			console.log('!!!!!', err)
		} else {
			res.status(200).send({ message: "Moot removed" });
		}
	})
}