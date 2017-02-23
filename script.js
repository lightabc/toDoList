//输入框，添加任务
var input = document.getElementsByTagName("input")[0];
input.onkeydown = function (e) {
    if (e.keyCode == 13) {
        var inputText = input.value;
        if (!inputText) {
            return false
        }
        localStorage.setItem(inputText, "0");
        var newItem = document.createElement("div");
        newItem.className = "item";
        newItem.innerHTML = inputText;
        var targetElement = document.getElementsByClassName("item")[0];
        if (!targetElement) {
            document.body.appendChild(newItem);
        } else {
            document.body.insertBefore(newItem, targetElement);
        }
        input.value = "";
        addClickEvent();
    }
};
//在刚打开页面后，根据localstoarage中的内容刷新页面。恢复数据
window.onload = function () {
    //如果localstorage中没有数据，就什么都不做
    if (!localStorage.length) {
        return false;
    }
    //恢复数据
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(localStorage.key(i));
        var newItem = document.createElement("div");
        newItem.className = "item";
        newItem.innerHTML = key;
        if (value == "1") {
            newItem.style.opacity = 0.5;
        }
        var targetElement = document.getElementsByClassName("item")[0];
        if (!targetElement) {
            document.body.appendChild(newItem);
        } else {
            document.body.insertBefore(newItem, targetElement);
        }
    }
    //添加任务的事件
    var items = document.getElementsByClassName("item");
    for (var j = 0; j < items.length; j++) {
        //todo 任务左侧checkbox
    }
};