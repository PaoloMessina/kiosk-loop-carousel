'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:ManagementCtrl
 * @description
 * # ManagementCtrl
 * Controller of the carouselApp
 */
angular.module('carouselApp')
.controller('ManagementCtrl', ['$scope', '$log', '$location', '$http', 'CONFIG', function ($scope, $log, $location, $http, CONFIG) {
	//console.log(CONFIG.list);
	//CONFIG.list[0].image = "http://www.boorp.com/sfondi_gratis_desktop_pc/sfondi_gratis/sfondi_paesaggi_mare_montagna/paesaggi_toscana_casale.jpg";

    $scope.customSettings = {
        control: 'brightness',
        theme: 'bootstrap',
        position: 'bottom left'
    };

    $scope.list = CONFIG.list;
    $scope.interval = CONFIG.interval;
    $scope.carouselBackgroundColor = CONFIG.carouselBackgroundColor;
    $scope.carouselTextColor = CONFIG.carouselTextColor;

	//$scope.configArea = JSON.stringify(data, "", 4);
	$scope.sendPost = function(){
		console.log("send data to http");
		//var dataTosend = data;
		//console.log($scope.configArea);
		//var dataTosend = JSON.parse($scope.configArea);
        var dataTosend = {list: $scope.list};

        if(/^\d+$/.test($scope.interval))
            dataTosend.interval = $scope.interval;
        else
            dataTosend.interval = 3000;

        if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test($scope.carouselBackgroundColor))
            dataTosend.carouselBackgroundColor = $scope.carouselBackgroundColor;
        else
            dataTosend.carouselBackgroundColor = '#000000';

        if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test($scope.carouselTextColor))
            dataTosend.carouselTextColor = $scope.carouselTextColor;
        else
            dataTosend.carouselTextColor = '#FFFFFF';

        console.log(dataTosend);
        //console.log("http://"+ $location.host() + ":85/setList");
		$http.post("http://"+ $location.host() + ":6040/setList", dataTosend).success(function(data, status) {
			//$scope.response = data;
			console.log("Response back");
		});
	};

    $scope.addTodo = function () {
        var obj = {image:'', text: $scope.text, index: $scope.list.length};
        $scope.list.push(obj);
        $scope.text = '';
    };

    $scope.removeTodo = function (index) {
        $scope.list.splice(index, 1);
    };

}]);
