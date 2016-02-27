// JavaScript source code

var app = angular.module('customerApp', ['ngRoute']);
app.controller('changedCustController', function ($scope, $routeParams) {
    $scope.Updates = function () {
        $routeParams.custName + " " + $routeParams.custCity;
    }
});
app.controller('changeCustController', function ($scope, $location) {
    $scope.Change = function () {
        $location.path('/changed/' + $scope.custName + "/" + $scope.custCity);
    }
});
app.controller('dispController', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Matt";
    $scope.city = "California";
    $scope.phone = "4088324756";
});
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'dispCustomer.html',
        controller: 'dispController'
    }).
    when('/change', {
        templateUrl: 'changeCustomer.html',
        controller: 'changeCustController'
    }).
    when('/changed/:custName/:custCity', {
        templateUrl: 'changedCustomer.html',
        controller: 'changedCustController'
    });
}]);
