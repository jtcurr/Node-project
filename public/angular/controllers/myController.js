angularApp.controller('myController', ['$timeout', '$scope', function($timeout, $scope) {
	$scope.mootName = 'Gil';
	$timeout(function() {
		$scope.mootName = 'Brian'
	}, 5000)
}])