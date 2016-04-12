angular.module('VentasApp').controller('LoteCtrl', ['$state', 'VentasApi', '$stateParams',
    function ($state, VentasApi, $stateParams) {
        var self = this;
        self.lote = {};
        self.estados_venta=[];

        VentasApi.get_lote($stateParams.id_lote).then(function (response) {
            self.lote = response.data;
        });
        
         VentasApi.get_estados_venta().then(function (response) {
            self.estados_venta = response.data;
        });
        
        self.alert=function(msg){
            alert(msg);
            console.log(msg);
        };
        
        


    }]);