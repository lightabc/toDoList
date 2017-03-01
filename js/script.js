var app = angular.module('myapp', []);
app.controller("ctrl01", function ($scope) {
    $scope.list = [];
    //恢复数据
    $scope.checkInput = function ($event) {
        if ($event.keyCode == 13) {
            $scope.add($scope.inputText);
            $scope.inputText = "";
        }
    };
    $scope.add = function () {
        $scope.list.unshift({text: $scope.inputText, done: false});
        store.set("list", $scope.list);
    };
});