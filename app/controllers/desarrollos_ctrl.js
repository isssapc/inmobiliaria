angular.module('VentasApp').controller('DesarrollosCtrl', ['$state', 'VentasApi', function ($state, VentasApi) {
        var self = this;
        self.desarrollos = [];
        self.desarrollo={};
        self.manzanas=[];
        self.lotes=[];

        VentasApi.get_desarrollos().then(function (response) {
            self.desarrollos = response.data;
        });
        
        self.get_lotes=function(obra){
          VentasApi.get_lotes_obra(obra.id_obra).then(function(response){
             self.lotes= _.chain(response.data.manzanas).pluck('lotes').flatten().value(); 
             //console.log(JSON.stringify(self.manzanas));
             //console.log(self.manzanas);
          });  
        };
        
        self.editar_lote=function(lote){
          $state.go('lote',{id_lote:lote.id_lote}); 
            
        };



    }]);