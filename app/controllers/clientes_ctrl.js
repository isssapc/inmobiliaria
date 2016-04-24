angular.module('VentasApp').controller('ClientesCtrl', ['$state','VentasApi', function ($state,VentasApi) {
        var self = this;
        self.clientes=[];
              
              VentasApi.get_clientes().then(function(response){
                 self.clientes=response.data; 
              });

    }]);