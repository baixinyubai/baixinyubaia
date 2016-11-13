angular.module('1111App')
  .controller('wyc', function ($scope,$http) {
    $http({
    	url:"http://www.somenote.cn:1602/list1",
    	method:"get",
    }).success(function(data){
    	$scope.wyc1=data
     })
  })
