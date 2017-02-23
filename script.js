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
        newItem.innerHTML = "\<input type='checkbox'\>" + inputText;
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
        newItem.innerHTML = "\<input type='checkbox'\>" + key;
        //todo 任务状态
        var checkbox1 = newItem.getElementsByTagName("input")[0];
        if (value == 0) {
            checkbox1.removeAttribute("checked");
        }else {
            checkbox1.setAttribute("checked","");
        }
        //
        var targetElement = document.getElementsByClassName("item")[0];
        if (!targetElement) {
            document.body.appendChild(newItem);
        } else {
            document.body.insertBefore(newItem, targetElement);
        }
    }
    //todo 添加事件
    var items = document.getElementsByClassName("item");
    for (var j = 0; j < items.length; j++) {
        var checkbox = items[j].getElementsByTagName("input")[0];
        if (checkbox) {
            checkbox.addEventListener("click", function () {
                //检查状态
                var status = 0;
                if (this.getAttribute("checked")) {
                    this.removeAttribute("checked");
                    status = 0;
                } else {
                    this.setAttribute("checked", "");
                    status = 1;
                }
                //添加到localstorage
                var text = this.parentNode.innerText;
                if (localStorage.getItem(text)) {
                    localStorage.setItem(text, status);
                } else {
                    console.log("error");
                }
            })
        } else {
            console.log("没找到checkbox");
        }
    }
};