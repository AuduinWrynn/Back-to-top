/**
 * Created by Mrkun on 2015/10/24.
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function back(){
    var back = document.getElementById("back");
    var timer = null;
    var clientHeight = document.documentElement.clientHeight;
    var backTop = document.body.scrollTop;               //为什么这句在其子函数中无效？
    window.onscroll = function() {
        var backTop = document.body.scrollTop;           //为什么删除这句之后程序运行会出错？
        if (backTop > (clientHeight-300) ) {
            back.style.display = "block";
        } else {
            back.style.display = "none";
        }
    }
        back.onclick = function () {
        timer = setInterval(function () {
            var backTop = document.body.scrollTop;       //为什么删除这句之后程序运行会出错？
            var speed = backTop/5;
            document.body.scrollTop=backTop-speed;
            if(backTop == 0){
                clearInterval(timer);
            }
        },30);
    }
}
addLoadEvent(back);