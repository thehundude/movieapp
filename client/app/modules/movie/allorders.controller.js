moviesApp.controller('allOrdersController', 
    function allOrdersController($scope, moviesAppService) {
        $scope.orders = [];

        $scope.getOrders = function(){
            moviesAppService.getOrders()
            .then(function(response){
                $scope.orders = response.data;
            })
        }

        // lapozós funkció: https://stackoverflow.com/questions/11581209/pagination-on-a-list-using-ng-repeat
        $scope.currentpage = 0;
        $scope.pageSize = 5;
        $scope.numberOfPages = function() {
            return Math.ceil($scope.orders.length/$scope.pageSize)
        }
    },

    moviesApp.filter('startFrom', function(){
        return function(input, start) {
            start = +start;
            return input.slice(start);
        }
    })
);