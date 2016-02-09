'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:CarouselCtrl
 * @description
 * # CarouselCtrl
 * Controller of the carouselApp
 */
angular.module('carouselApp')
.controller('CarouselCtrl', ['$scope', 'CONFIG', function ($scope, CONFIG) {
	console.log(CONFIG.list);
	$scope.slides = CONFIG.list;
	$scope.myInterval = CONFIG.interval;
    $scope.carouselBackgroundColor = CONFIG.carouselBackgroundColor;
    $scope.carouselTextColor = CONFIG.carouselTextColor;
  	$scope.noWrapSlides = false;
  	
  	$scope.getText = function(text){
  		return text.replace("<br>", "\n");
  	};
}]);
