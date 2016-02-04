'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:ManagementCtrl
 * @description
 * # ManagementCtrl
 * Controller of the carouselApp
 */
angular.module('carouselApp')
.controller('ManagementCtrl', ['$scope', '$log', '$http', 'CONFIG', function ($scope, $log, $http, CONFIG) {
	console.log(CONFIG.list);
	//CONFIG.list[0].image = "http://www.boorp.com/sfondi_gratis_desktop_pc/sfondi_gratis/sfondi_paesaggi_mare_montagna/paesaggi_toscana_casale.jpg";
	var data = {list: [
			{
				image: '',
				text: 'prova 1',
				index: 1
			},
			{
				image: '',
				text: 'prova 2',
				index: 2
			},
			{
				image: '',
				text: 'prova 3',
				index: 3
			},
			{
				image: '',
				text: 'prova 4',
				index: 4
			}]};
	
	
	$scope.configArea = JSON.stringify(data, "", 4);
	$scope.sendPost = function(){
		console.log("send data to http");
		//var dataTosend = data;
		console.log($scope.configArea);
		var dataTosend = JSON.parse($scope.configArea);	
		$http.post("http://localhost:9001/setList", dataTosend).success(function(data, status) {
			$scope.response = data;
			console.log("Response back");
		});
	};
}]);
