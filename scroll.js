var app = angular.module("MinistryApp",[]);

app.controller("PreachersController", function ($scope) {
    $scope.preachersCount = 1;
    
    $scope.preachers = [
            "images/images (1).jpeg",
            "images/images (10).jpeg",
            "images/images (3).jpeg",
            "images/images (6).jpeg",
            "images/images (8).jpeg",
            "images/images (9).jpeg",
            "images/images.jpeg",
            "images/images (2).jpeg",
            "images/images (7).jpeg",
        ]

        $scope.previous = function() {
            $scope.preachersCount = $scope.preachersCount - 1 ;
        }

        $scope.next = function() {
            $scope.preachersCount = $scope.preachersCount + 1 ;
        }
});