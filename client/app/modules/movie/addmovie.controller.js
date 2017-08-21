moviesApp.controller('addMovieController',
    function addMovieController($scope, moviesAppService){
        $scope.addMovie = function() {
            $scope.movie.availableseats = 100;
            moviesAppService.addMovie($scope.movie);
            $scope.movie = {};
        }

        $scope.disabledButton = "disabled";

        $scope.disableButton = function() {
            if (document.getElementById("movieTitle").value == "" ||
                document.getElementById("movieDirector").value == "" ||
                document.getElementById("movieLength").value == "" ||
                document.getElementById("movieScreening").value == ""
                ) {
                    $scope.disabledButton = "disabled";
                }
            else {
                $scope.disabledButton = "";
            }
        }
    });