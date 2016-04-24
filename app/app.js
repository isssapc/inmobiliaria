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
                    controller: 'LoteCtrl as ctrl',
                    resolve: {
                        tipos: function (VentasApi) {
                            return VentasApi.get_tipos_pago();
                        },
                        formas: function (VentasApi) {
                            return VentasApi.get_formas_pago();
                        },
                        estados: function (VentasApi) {
                            return VentasApi.get_estados_venta();
                        }
                    }
                })
                .state('clientes', {
                    url: '/clientes',
                    templateUrl: 'templates/clientes.html',
                    controller: 'ClientesCtrl as ctrl'
                })
                .state('clientes.nuevo', {
                    url: '/nuevo',
                    views: {
                        '@': {
                            templateUrl: 'templates/nuevo_cliente.html',
                            controller: 'NuevoClienteCtrl as ctrl'
                        }
                    }
                })
                .state('desarrollos', {
                    url: '/desarrollos',
                    templateUrl: 'templates/desarrollos.html',
                    controller: "DesarrollosCtrl as ctrl"
                });
    }]);
app.controller('AppCtrl', [function () {

    }]);












