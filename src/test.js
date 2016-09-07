angular.module('TemplApp', [])
.controller('TemplController', ['$scope', function($scope) {
  $scope.customer = {
    name: 'Théo',
    address: '33000 Bordeaux'
  };
}])
.directive('customer', function() {
  return {
    templateUrl: 'customer.html'
  };
});

