var input = document.getElementsByTagName("input")[0];
//添加任务
input.onkeydown = function (e) {
    if (e.keyCode == 13) {
        //如果按下了回车，就添加一个任务
        var inputText = input.value;
        console.log(inputText);//记录input的值
        var newItem = document.createElement("div");
        newItem.className = "item";
        newItem.onclick = function(){
            this.style.display = "none";
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