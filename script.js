var app = angular.module("myapp", []);
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
        $scope.list.push({text: inputText, done: false});
    };
    $scope.changeStatus = function (element) {
        var text = element.innerHTML;
        for (var i = 0; i < $scope.list.length; i++) {
            if ($scope.list[i].text == text) {
                var status = $scope.list[i].done;
                if (status == true) {
                    $scope.list[i].done = false;
                    element.style.opacity = 1;
                } else {
                    $scope.list[i].done = true;
                    element.style.opacity = 0.5;
                }
            }
        }
    }
});