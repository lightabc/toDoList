var app = angular.module('myapp', []);
app.controller("ctrl01", function ($scope) {
    $scope.inputText = "";
    $scope.list = [];
    //恢复数据
    var data = store.get("list");
    if (data) {
        console.log(data);
        $scope.list = data;
    } else {
        $scope.list = [];
    }
    //添加任务
    $scope.checkInput = function ($event) {
        if ($scope.inputText == "") {
            return false
        }
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