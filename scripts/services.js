/**
 * Created by crobinson on 2/27/14.
 */

app.service('productsService', function(){
    this.getProducts = function(){
        return [
            { name: "iPod", price: 98, id: 1, age: 25, color: "red" },
            { name: "iMac", price: 265.00, id: 2, age: 30, color: "blue" },
            { name: "bike", price: 55.00, id: 3, age: 1, color: "purple" },
            { name: "weed", price: 4894.00, id: 4, age: 5, color: "black" },
            { name: "hair gel", price: 44.00, id: 5, age: 9, color: "green" },
            { name: "others", price: 984.00, id: 6, age: 13, color: "teal" }
        ];
    };
});

app.service('weatherService', function($http, $q){

    /**
     * Example function that returns a promise containing a string
     * after 5 seconds.  It's called when trying to resolve the property resolvedPromiseString
     * in our routeProvider.
     * @returns {promise|*}
     */
    this.waiting = function(){
        var deferred = $q.defer();
        setTimeout(function(){
            deferred.resolve("This string was returned after 5 seconds, and is stored in a promise.");
        }, 5000);
        return deferred.promise;
    };

    this.getTenDayForecast = function(){
        return weather;
    }
});

app.service('dogService', function(){

    this.getDogs = function(){
        return dogs;
    };

});
