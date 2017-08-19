moviesApp.controller('allOrdersController', 
    function allOrdersController($scope, moviesAppService) {
        $scope.orders = [];

        $scope.getOrders = function(){
            moviesAppService.getOrders()
            .then(function(response){
                $scope.orders = response.data;
            })
        }
    });