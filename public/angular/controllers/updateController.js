angularApp.controller('updateController', ['$http', function($http) {
	var vm = this;
	vm.updateSelector = '';

	vm.update = function() {
	$http({
        method : "PUT",
        url : "/updateMoot",
        data: { name: updateSelector}
    }).then(function mySuccess(response) {
    	console.log('Successfully updated!')
        vm.myWelcome = response.data;
    }, function myError(response) {
    	console.log('Error updating')
        vm.myWelcome = response.statusText;
    });
  }
}])