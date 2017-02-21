var input = document.getElementsByTagName("input")[0];
//添加任务
input.onkeydown = function (e) {
    if (e.keyCode == 13) {
        //如果内容为空，不允许新建任务
        if (!input.value) {
            return false
        }
        //如果按下了回车，就添加一个任务
        var inputText = input.value;
        console.log(inputText);//记录input的值
        var newItem = document.createElement("div");
        newItem.className = "item";
        newItem.onclick = function () {
            this.style.opacity = 0.5;
        };
        newItem.innerHTML = inputText;
        //插入新的任务到下面的列表
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