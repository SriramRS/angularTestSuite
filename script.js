angular.module('myApp',[]).
controller('myController',['$scope','$http',function($scope,$http){
   $http.get('crime.json').then(function(content){
     $scope.crime = content.data;
     $scope.len = Math.ceil($scope.crime.length);
   });//End of controller
   $scope.findLen = function(){
     $scope.len = Math.ceil($scope.crime.length);
     console.log($scope.len);
   }
}])
.directive('myDir',function(){
  return{
      templateUrl : 'my-dialog.html'
	  };
	  });
/*
Start:
 current page number should be 1
 page size should be any constant value
 pageCount should be calculated based on pageSize and length of json object
 pagination must be updated on every action
 add: increase length of json by 1
      move to last page
      
*/
/*
angular.module('docsTransclusionExample', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.name = 'Tobias';
}])
.directive('myDialog', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    templateUrl: 'my-dialog.html',
    link: function(scope) {
      scope.name = 'Jeff';
    }
  };
});
*/
