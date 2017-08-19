moviesApp.controller('moviesController', 
    function moviesController($scope, moviesAppService) {
        $scope.visible = false;
        $scope.movies = [];

        $scope.getMovies = function() {
            moviesAppService.getAllMovies()
            .then(function(response) {
                $scope.movies = response.data;
            })
        }

        $scope.saveOrder = function () {
            var order = {};
            order.name = document.getElementById("customername").value;
            order.email = document.getElementById("customeremail").value;
            order.movieid = document.getElementById("moviename").innerText;
            order.tickets = document.getElementById("reservedseats").innerText;
            moviesAppService.saveOrder(order);
            order = null;       
        }

        $scope.click = function(movie) {
            if ($scope.visible == false)
                $scope.visible = true;
            else
                $scope.visible = false;
            
            // csúnya  megoldás a rendelés adatok átvitelére
            var number = "seats" + movie.id;
            var x = document.getElementById("moviename");
            x.innerText = movie.title;
            var y = document.getElementById("reservedseats");
            var z = document.getElementById(number).value;
            y.innerText = z;
        }

        $scope.show = function() {
            return $scope.visible;
        }
    }
)