'use strict';

/**
 * app routes
 * @description Main app routes to load view template and controller for each view
 *
 * @dependency {function} ui.router
 * @dependency {function} ngCookies
 * ui.router inplace of ng-route, ng-cookies to store session
 *
 */

angular.module('appRouter', ['ui.router', 'ngCookies'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'modules/views/core/home.html',
        isAccess: true,
        controller: 'mainCtrl'
      })

      .state('signup', {
        url: '/signup',
        templateUrl: 'modules/views/auth/signup.html',
        isAccess: true,
        controller: 'authCtrl'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'modules/views/auth/login.html',
        isAccess: true,
        controller: 'authCtrl'
      })

      .state('home', {
        url: '/patient/home',
        templateUrl: 'modules/views/core/patient.landingpage.view.html',
        isAccess: false,
        controller: 'userHomeCtrl'
      })

      .state('patient', {
        url: '/patient/schedule',
        templateUrl: 'modules/views/core/patient.client.view.html',
        isAccess: false,
        controller: 'patientCtrl'
      })

      .state('doctor', {
        url: '/doctor/home',
        templateUrl: 'modules/views/core/doctor.client.view.html',
        isAccess: true,
        controller: 'doctorCtrl'
      })

      .state('admin', {
        url: '/admin',
        templateUrl: 'modules/views/core/admin.client.view.html',
        isAccess: false,
        controller: 'adminCtrl'
      })

      .state('edit', {
        url: '/edit-appointment',
        templateUrl: 'modules/views/core/edit.appointment.view.html',
        isAccess: false,
        controller: 'editCtrl'
      })

      .state('schedule', {
        url: '/schedule-appointment',
        templateUrl: 'modules/views/core/schedule.appointment.view.html',
        isAccess: false,
        controller: 'scheduleCtrl'
      });
  }])
  .config(function($httpProvider) {
      $httpProvider.interceptors.push('AuthInterceptor');
  })
  .value('options', {
    // value method to set options to customize url to avoid repeatition of base url
    'API_URL' : 'https://schedmedic.herokuapp.com/api/v1/'
    // 'API_URL' : 'http://localhost:5555/api/v1/'
  });