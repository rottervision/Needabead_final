var app = angular.module('testApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .otherwise({
      controller: 'simple',
      templateUrl: '0home.html'
    })
    .when('/1jasper', {
      controller: 'simple',
      templateUrl: '1jasper.html'
    })
    .when('/2lava', {
      controller: 'simple',
      templateUrl: '2lava.html'
    })
    .when('/3turquoise', {
      controller: 'simple',
      templateUrl: '3turquoise.html'
    })
    .when('/4lemonquartz', {
      controller: 'simple',
      templateUrl: '4lemonquartz.html'
    })
    .when('/5clearquartz', {
      controller: 'simple',
      templateUrl: '5clearquartz.html'
    })
    .when('/6blueopal', {
      controller: 'simple',
      templateUrl: '6blueopal.html'
    })
});
app.controller('simple', function(){
});

app.controller('testCtrl', function($scope, $http) {

  $scope.searchEtsy = function(userInput) {

    api_key = "pdell74i19m3lgtqwpw7tlcu";
    etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords=" + userInput + "&limit=10&api_key=" + api_key;

    $.ajax({
        url: etsyURL,
        dataType: 'jsonp',
        success: function(data) {
          console.log(data.results[0].description);
          $scope.etsyDescription=data.results[0].description;
          $scope.$apply();
  }
    });
  };
});
