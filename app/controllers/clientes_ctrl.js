angular.module('VentasApp').controller('ClientesCtrl', ['$scope', '$state', 'VentasApi', 'uiUploader', function ($scope, $state, VentasApi, uiUploader) {
        var self = this;
        self.clientes = [];
        self.files = [];

        VentasApi.get_clientes().then(function (response) {
            self.clientes = response.data;
        });

        var element = document.getElementById('file');
        element.addEventListener('change', function (e) {
            var files = e.target.files;
            uiUploader.addFiles(files);
            self.files = uiUploader.getFiles();
            $scope.$apply();
        });

        self.removeFile = function (file) {
            //console.log('deleting=' + file);
            uiUploader.removeFile(file);
        };

        self.removeAll = function () {
            uiUploader.removeAll();
        };

        self.upload = function () {
            //console.log('uploading...');
            uiUploader.startUpload({
                url: 'http://localhost:8000/controldeobras_api/index.php/upload/document',
                concurrency: 2,
                onProgress: function (file) {
                    //console.log(file.name + '=' + file.humanSize);
                    $scope.$apply();
                },
                onCompleted: function (file, response, status) {

                    if (status === 400) {
                        var json = JSON.parse(response);
                        //la propiedad error es un array de errores

                        console.log("Ha ocurrido un error al intentar subir el archivo " + file.name);
                        console.log(json.error);

                    } else if (status === 200) {
                        var json = JSON.parse(response);
                        //la propiedad data es un objeto

                        console.log("El archivo " + file.name + " se ha subido correctamente");
                        console.log(json.data);

                        //self.files = [];
                        uiUploader.removeFile(file);
                        $scope.$apply();
                    } else {
                        console.log("Ha ocurrido un error al intentar subir su archivo");
                    }
                    $('#file').val("");

                },
                onError: function () {
                    console.log("Ha ocurrido un error inesperado al intentar subir el archivo");
                }
            });
        };




    }]);