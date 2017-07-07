angularApp.controller('deleteController', ['$http', function($http) {

    var vm = this;

    vm.deleteName = '';

    vm.delete = function() {
        $http({
        url: '/deleteMoot',
        method: 'DELETE',
        data: {
            name: vm.deleteName
        },
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then(function(res) {
        console.log(res.data);
    }, function(error) {
        console.log(error);
    });
    vm.deleteName = '';
    }

}])
