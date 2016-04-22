angular.module('VentasApp').controller('LoteCtrl', ['$state', 'VentasApi', '$stateParams','tipos','formas',
    function ($state, VentasApi, $stateParams,tipos,formas) {
        var self = this;
        self.lote = {};
        self.estados_venta=[];
        self.formas=formas.data;
        self.tipos=tipos.data;
        
         VentasApi.get_estados_venta().then(function (response) {
            self.estados_venta = response.data;
        });
        
        self.alert=function(msg){
            alert(msg);
            console.log(msg);
        };
        
        


    }]);