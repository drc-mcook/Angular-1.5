'use strict'

angular.module('blogList').
    component('blogList', {
        //template: "<div> <h1 class='header1'>{{ title }}</h1><button ng-click='someClick()'>Click me</button></div>",
        templateUrl: 'blog-list.html',
        controller: function ($scope) {
            $scope.title = 'Hello there'
            $scope.clicks = 0;
            $scope.someClick = function () {
                $scope.clicks += 1
                $scope.title = 'Clicked ' + $scope.clicks + ' times!!!'
            }
        }
    });

    // controller('BlogListController', function ($scope) {
    //     $scope.title = 'Hello there'
    //     $scope.clicks = 0;
    //     $scope.someClick = function () {
    //         $scope.clicks += 1
    //         $scope.title = 'Clicked ' + $scope.clicks + ' times!!!'
    //     }
    // })
    