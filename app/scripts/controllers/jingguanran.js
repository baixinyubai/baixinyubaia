angular.module('1111App')
 .controller('jgr', function ($scope,$http) {
    $http({
    	url:"http://www.somenote.cn:1602/list2",
    	method:"get",
    }).success(function(data){
    	$scope.jgr1=data
     })
  })