moviesApp.factory('moviesAppService', function($http) {
    var service = {};
    var allMovies = [];

    service.getAllMovies = function() {
        return $http.get('http://localhost:8080/movie');
    }

    service.saveOrder = function(order) {
        return $http.post('http://localhost:8080/order', {order});
    }

    service.getOrders = function() {
        return $http.get('http://localhost:8080/order');
    }

    return service;
})