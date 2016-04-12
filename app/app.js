'use strict';
var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function ($window) {
        return $window._;
    }]);
var app = angular.module('VentasApp', ['ui.router', 'smart-table', 'underscore', 'myApp.version']);
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('home', {
                    url: '/'

                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl as ctrl'
                })
                .state('lote', {
                    url: '/lote/:id_lote',
                    templateUrl: 'templates/lote.html',
                    controller: 'LoteCtrl as ctrl'
                })
                .state('clientes', {
                    url: '/clientes',
                    templateUrl: 'templates/clientes.html',
                    controller: 'ClientesCtrl as ctrl'
                })
                .state('obras', {
                    url: '/obras',
                    templateUrl: 'templates/obras.html',
                    controller: "ObrasCtrl as ctrl"
                });
    }]);
app.controller('AppCtrl', [function () {

    }]);












