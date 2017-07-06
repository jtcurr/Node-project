angularApp.controller('addController', ['$http', '$scope', '$timeout', function($http, $scope, $timeout) {
	var vm  = this;
	vm.name = '';
	vm.size = '';
	vm.level = '';
	vm.mootNames = [];
	vm.getAll = function() {
		$http.get('/getAllTheMoots').then(function(data) {
			vm.mootNames = data.data
		})
  }
  vm.getAll();
	vm.submit = function() {
			vm.data = {
				name: vm.name,
				size: vm.size,
				level: vm.level
			}
	$http.post('/addMoot', vm.data).then(function(response) {
		console.log('Added to database')
			vm.mootNames.push(vm.data);
			vm.name = '';
			vm.size = '';
			vm.level = '';
	}).catch(function(error) {
		console.log('Error adding to database ', error)
	})
	}
	vm.deleteName = '';

	vm.delete = function() {
		$http.delete('/deleteMoot', vm.delteName).then(function(response) {
			console.log('Successfully deleted')
		}).catch(function(error){
			console.log('Error removing from database', error)
		})
	}
}])