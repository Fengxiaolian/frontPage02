var app=angular.module('app',['ngRoute','ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider.when(
        '/home',
        {
            templateUrl:'about.html'
        }
    ).when(
        '/shopList',
        {
            templateUrl:'shopList.html'
        }
    ).when(
        '/shopDetail',
        {
            templateUrl:'shopDetail.html'
        }
    ).when(
        '/wishList',
        {
            templateUrl:'wishList.html'
        }
    ).when(
        '/shopCart',
        {
            templateUrl:'shopCart.html'
        }
    ).when(
        '/checkout',
        {
            templateUrl:'checkout.html'
        }
    ).otherwise(
        {
            templateUrl:'about.html'
        }
    )
});
//轮播
app.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = slides.length + 2;
        slides.push({
            image: 'assy/' + newWidth + '.jpg',
            id: currIndex++
        });
    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 12; i++) {
        $scope.addSlide();
    }

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }
});