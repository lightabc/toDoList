//恢复数据
window.onload = function () {
    if (!localStorage.length) {
        return false;
    }
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(localStorage.key(i));
        createItem(key, value);
    }
};
//输入框，添加任务
var input = document.getElementsByTagName("input")[0];
input.onkeydown = function (e) {
    if (e.keyCode == 13) {
        if (!input) {
            return false
        }
        createItem(this.value, "0");
        this.value = "";
    }
};
function createItem(content, status) {
    //生成元素
    var newItem = document.createElement("div");
    newItem.className = "item";
    newItem.innerHTML = content;
    //todo 添加事件
    newItem.addEventListener("click", function () {
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
}