var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


var refresh = function() {
  $http.get('/hostrecord').success(function(response) {
    console.log("I got the data I requested");
    $scope.hostrecord = response;
    $scope.host = "";
  });
};

refresh();

$scope.addHost = function() {
  console.log($scope.host);
  $http.post('/hostrecord', $scope.host).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/hostrecord/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/hostrecord/' + id).success(function(response) {
    $scope.host = response;
  });
};

$scope.update = function() {
  console.log($scope.host._id);
  $http.put('/hostrecord/' + $scope.host._id, $scope.host).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.host = "";
}

}]);﻿
