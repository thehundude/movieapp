moviesApp.controller('addMovieController',
    function addMovieController($scope, moviesAppService){
        $scope.addMovie = function() {
            $scope.movie.availableseats = 100;
            moviesAppService.addMovie($scope.movie);
            $scope.movie = {};
        }
    });