angular.module('VentasApp').controller('LogoutCtrl', ['$state', '$auth', function ($state,  $auth) {


        $auth.removeToken();
        $state.go('login');


    }]);