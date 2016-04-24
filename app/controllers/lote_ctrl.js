angular.module('VentasApp').controller('LoteCtrl', ['$state', 'VentasApi', '$stateParams', 'tipos', 'formas', 'estados',
    function ($state, VentasApi, $stateParams, tipos, formas, estados) {
        var self = this;
        self.lote = {};
        self.estados_venta = estados.data;
        self.formas = formas.data;
        self.tipos = tipos.data;
        self.pago={};


        VentasApi.get_lote($stateParams.id_lote).then(function (response) {
            self.lote = response.data;
        }).catch(function (response) {
            console.log("error al obtener los datos del lote");
        });

        self.addPago = function (form, lote, pago) {
            console.log("addPago");
            var nuevo_pago= angular.copy(pago);
            delete nuevo_pago.tipo;
            delete nuevo_pago.forma;
            nuevo_pago.id_tipo_pago=pago.tipo.id_tipo_pago;
            nuevo_pago.id_forma_pago=pago.forma.id_forma_pago;
            nuevo_pago.id_lote=lote.id_lote;
            
            console.log(JSON.stringify(nuevo_pago));
            VentasApi.add_pago(nuevo_pago).then(function (response) {
                console.log("response", response.data);
                
                self.lote.pagos.unshift(response.data);
                self.pago={};
            }).catch(function (response) {
                console.log("error al agregar un nuevo pago");
            });
        };
        
        





        self.alert = function (msg) {
            alert(msg);
            console.log(msg);
        };




    }]);