//恢复数据
/*window.onload = function () {
 if (!localStorage.length) {
 return false;
 }
 for (var i = 0; i < localStorage.length; i++) {
 var key = localStorage.key(i);
 var value = localStorage.getItem(localStorage.key(i));
 createItem(key, value);
 }
 };
 function createItem(content, status) {
 //生成元素
 var newItem = document.createElement("div");
 newItem.className = "item";
 newItem.innerHTML = content;
 //todo 添加事件
 newItem.addEventListener("click", function (e) {
 e.preventDefault();
 var status = localStorage.getItem(this.innerHTML);
 if (status == 0) {
 localStorage.setItem(this.innerHTML, "1");
 this.style.opacity = 0.5;
 } else {
 localStorage.setItem(this.innerHTML, "0");
 this.style.opacity = 1;
 }
 });
 //插入到列表
 var targetElement = document.getElementsByClassName("item")[0];
 if (!targetElement) {
 document.body.appendChild(newItem);
 } else {
 document.body.insertBefore(newItem, targetElement);
 }
 //同步到localstorage
 localStorage.setItem(content, status);
 }*/

var app = angular.module("myapp", []);
app.controller("ctrl01", function ($scope) {
    $scope.inputText = "";
    $scope.list = [{text: "clean house", done: false}];
    $scope.checkInput = function ($event) {
        if ($event.keyCode == 13) {//回车
            $scope.add($scope.inputText);
            $scope.inputText = "";
        }
    };
    $scope.add = function (inputText) {
        $scope.list.push({text: inputText, done: false});
    }
});