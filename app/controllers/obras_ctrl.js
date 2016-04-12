angular.module('VentasApp').controller('ObrasCtrl', ['$state', 'VentasApi', function ($state, VentasApi) {
        var self = this;
        self.obras = [];
        self.manzanas=[];

        VentasApi.get_obras().then(function (response) {
            self.obras = response.data;
        });
        
        self.get_lotes=function(obra){
          VentasApi.get_lotes_obra(obra.id_obra).then(function(response){
             self.manzanas=response.data.manzanas[0]; 
          });  
        };
        
        self.editar_lote=function(lote){
          $state.go('lote',{id_lote:lote.id_lote}); 
            
        };



    }]);