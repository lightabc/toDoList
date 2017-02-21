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
        //新任务的点击事件
        newItem.onclick = function () {
            this.style.opacity = 0.5;
            //在localstorage中标记为已完成
            //在localstorage中查找这个任务，标记value=0
            if(localStorage.getItem(inputText)){
                localStorage.setItem(inputText,"1")
            }
        };
        newItem.innerHTML = inputText;
        var targetElement = document.getElementsByClassName("item")[0];
        if (!targetElement) {
            document.body.appendChild(newItem);
        } else {
            document.body.insertBefore(newItem, targetElement);
        }
        //清除输入框的内容
        input.value = "";
    }
};