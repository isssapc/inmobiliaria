angular.module('VentasApp')
        .factory('VentasApi', ['$http', function FacturasApiFactory($http) {
                var url = 'http://localhost:8000/controldeobras_api/index.php/';// 'http://192.168.1.81:8000/test_rest/index.php/';

                return {
                    get_obras: function () {
                        return $http.get(url + 'obras/');
                    },
                    get_lote: function (id_lote) {
                        return $http.get(url + 'lotes/ventas_detalle/' +id_lote);
                    },
                      get_estados_venta: function (id_lote) {
                        return $http.get(url + 'ventas_estado_lote');
                    },
                    get_lotes_obra: function (id_obra) {
                        return $http.get(url + 'obras/get_manzanas_lotes/' + id_obra);
                    },
                     get_tipos_pago: function () {
                        return $http.get(url + 'ventas_tipos_pago' );
                    },
                     get_formas_pago: function () {
                        return $http.get(url + 'ventas_formas_pago');
                    }
                };
            }]);

