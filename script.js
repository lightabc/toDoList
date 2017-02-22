var input = document.getElementsByTagName("input")[0];
//添加任务
input.onkeydown = function (e) {
    if (e.keyCode == 13) {
        var inputText = input.value;
        //如果内容为空，不允许添加任务
        if (!inputText) {
            return false
        }
        //相关信息输入到localstorage
        localStorage.setItem(inputText, "0");
        //根据localstorage中的信息刷新view
        //如果按下了回车，就添加一个任务
        var newItem = document.createElement("div");
        newItem.className = "item";
        newItem.innerHTML = inputText;
        var targetElement = document.getElementsByClassName("item")[0];
        if (!targetElement) {
            document.body.appendChild(newItem);
        } else {
            document.body.insertBefore(newItem, targetElement);
        }
        //清除输入框的内容
        input.value = "";
        addClickEvent();
    }
};
//在刚打开页面后，根据localstoarage中的内容刷新页面。恢复数据
window.onload = function () {
    //刷新列表
    if (!localStorage.length) {
        return false;
    }
    for (var i = 0; i < localStorage.length; i++) {
        //key(i)获得相应的键，再用getItem()方法获得对应的值
        var key = localStorage.key(i);
        var value = localStorage.getItem(localStorage.key(i));
        //创建一个div元素作为任务，插入到列表
        var newItem = document.createElement("div");
        newItem.className = "item";
        newItem.innerHTML = key;
        if (value == "1") {
            //透明度设置
            newItem.style.opacity = 0.5;
        }
        newItem.onclick = function () {
            if (this.style.opacity == 1 && !this.style.opacity) {
                //如果没有标记完成
                this.style.opacity = 0.5;
                //在localstorage中标记为已完成
                //在localstorage中查找这个任务，标记value=0
                if (localStorage.getItem(this.innerHTML)) {
                    localStorage.setItem(this.innerHTML, "1")
                }
            } else if (this.style.opacity == 0.5) {
                //如果被标记完成
                this.style.opacity = 1;
                //在localstorage中标记为已完成
                //在localstorage中查找这个任务，标记value=0
                if (localStorage.getItem(this.innerHTML)) {
                    localStorage.setItem(this.innerHTML, "0")
                }
            }
        };
        //任务放到列表中
        var targetElement = document.getElementsByClassName("item")[0];
        if (!targetElement) {
            document.body.appendChild(newItem);
        } else {
            document.body.insertBefore(newItem, targetElement);
        }
    }
    //item的点击事件
    addClickEvent();
};
//给任务添加点击事件，用于标记是否已完成任务
function addClickEvent() {
    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            //检查此任务在数据库中的状态
            var status = localStorage.getItem(this.innerHTML);
            var newStatus = null;
            if (status == 0) {
                //如果是没有选中的状态
                newStatus = 1;
                this.style.opacity = 0.5;
            } else {
                //如果是选中的状态
                newStatus = 0;
                this.style.opacity = null;
            }
            localStorage.setItem(this.innerHTML, newStatus);
        };
    }
}