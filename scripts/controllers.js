/**
 * Created by crobinson on 2/26/14.
 */

app.controller('productsController', function($scope, productsService){

    function init(){
        $scope.products = productsService.getProducts();
    }
    init();

    $scope.addNewProduct = function(){
      $scope.products.push($scope.newProduct);
    };

});

app.controller('detailsController', function($scope, $routeParams, productsService){

    function init() {
        var productId = ($routeParams.productId) ? parseInt($routeParams.productId) : 0;
        if(productId > 0){
            $scope.productId = productId;
        }
        $scope.products = productsService.getProducts();
    }
    init();

});

app.controller('weatherController', function($scope, $routeParams, weatherService, resolvedPromiseString){
    $scope.forecast = weatherService.getTenDayForecast();
    $scope.resolvedPromiseString = resolvedPromiseString;
});

app.controller('testingController', function($scope, dogService){
    $scope.dogs = dogService.getDogs();
});



