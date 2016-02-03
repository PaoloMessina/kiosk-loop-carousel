'use strict';

/**
 * @ngdoc overview
 * @name carouselApp
 * @description
 * # carouselApp
 *
 * Main module of the application.
 */
angular
  .module('carouselApp', [
    'carouselApp.dev',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/carousel.html',
        controller: 'CarouselCtrl',
        controllerAs: 'Carousel'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/management', {
        templateUrl: 'views/management.html',
        controller: 'ManagementCtrl',
        controllerAs: 'Management'
      });
  });
