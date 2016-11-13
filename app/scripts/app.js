'use strict';

/**
 * @ngdoc overview
 * @name 1111App
 * @description
 * # 1111App
 *
 * Main module of the application.
 */

  
angular.module('1111App', ["ui.router"])
  .config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('wyc',{
		url:'/wangyuechao',
		templateUrl:'views/wangyuechao.html',
		controller:"wyc"
		})
		.state('jgr',{
		url:'/jingguanran',
		templateUrl:'views/jingguanran.html',
		controller:"jgr"
	});
})
