var moviesApp = angular.module('moviesApp', ['ngRoute']);

moviesApp.config (function($routeProvider) {
    $routeProvider
        .when("/movie", {
            templateUrl: "modules/movie/movies.html"
        })
        .when("/", {
            template: "<p>Főoldal</p>"
        })
        .when("/allorders", {
            templateUrl: "modules/movie/allorders.html"
        })
});