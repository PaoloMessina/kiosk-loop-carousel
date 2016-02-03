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
	$scope.sendPost = function(){
		console.log("send data to http");
		var data = {list: [
			{
				image: '',
				text: 'prova nuovo 1',
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

		$http.post("http://localhost:9001/setList", data).success(function(data, status) {
			$scope.response = data;
			console.log("Response back");
		});
	};
}]);
