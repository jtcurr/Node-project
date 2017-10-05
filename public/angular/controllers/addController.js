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
	}
}])