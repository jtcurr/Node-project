angularApp.controller('myController', ['$timeout', '$scope', function($timeout, $scope) {
	$scope.mootName = 'Gil';
	$timeout(function() {
		$scope.mootName = 'Bacos';
	}, 5000)
}])