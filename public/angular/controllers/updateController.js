angularApp.controller('updateController', ['$http', function($http) {
	var vm = this;
	vm.updateSelector = '';
	vm.newNameSelector = '';

	vm.update = function() {
	$http({
        method : "POST",
        url : "/updateMoot",
        data: { name: vm.updateSelector,
        	newName: vm.newNameSelector}
    }).then(function mySuccess(response) {
    	console.log('Successfully updated!');
        vm.myWelcome = response.data;
    }, function myError(response) {
    	console.log('Error updating');
        vm.myWelcome = response.statusText;
    });
  }
}])