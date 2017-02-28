console.log(store);
var app = angular.module('myapp', []);
app.controller("ctrl01", function ($scope) {
    $scope.inputText = "";
    $scope.list = [{text: "clean house", done: false}];
    $scope.checkInput = function ($event) {
        if ($event.keyCode == 13) {
            $scope.add($scope.inputText);
            $scope.inputText = "";
        }
    };
    $scope.add = function (inputText) {
        $scope.list.unshift({text: inputText, done: false});
    };
});