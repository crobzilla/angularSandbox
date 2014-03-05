/**
 * Created by crobinson on 2/26/14.
 */
var app = angular.module('productsApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'productsController',
            templateUrl: 'views/products.html'
        })
        .when('/details/:productId', {
            controller: 'detailsController',
            templateUrl: 'views/productdetails.html'
        })
        .when('/weather/', {
            controller: 'weatherController',
            templateUrl: 'views/weather.html',

            /**
             * Example of using a resolve.
             *
             * In this scenario, the assigned controller won't be instantiated until the 'resolvedPromiseString'
             * is resolved because the callback function that it is calling returns a promise.  It will wait for the promise
             * to resolve before control gets passed to the controller, and we can then inject the resolvedPromiseString
             * into our controller
             */
            resolve: {
                resolvedPromiseString: function(weatherService){
                    return weatherService.waiting();
                }
            }
        });
    ;
});

