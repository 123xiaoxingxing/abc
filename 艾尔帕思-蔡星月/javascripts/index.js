/**
 * 功能：首页部分
 * 开发者：
 * 最后修改日期：
 **/
/**********储存链接**********/
window.onload = function () {
    creatherf({
        index:"index.html",
        service:"pages/service.html",
        solution:"pages/solution.html",
        about:"pages/about.html"
    })
}
//获取轮播图
var slider = document.getElementsByClassName("slider");
var index = 0;
//调用轮播图第一张展示函数
fning();
//定时函数
setInterval(function () {
    slider[index].style.display = 'none';
    index = ++index == slider.length ? 0 : index;
    slider[index].style.display = 'block';
}, 3000);
//判断轮播图
function fning() {
    for (var i = 0; i < slider.length; i++) {
        slider[0].classList.add("fing");
        if (slider[i].className === "slider fing") {
            slider[i].style.display = "block";
        }
        else {
            slider[i].style.display = "none";
        }
    }
}
/**********************************
 *功能 ：页面跳转
 **********************************/
fn1();
fn2();
//设置选项卡索引
    function fn1() {
    var setKey = sessionStorage.setItem("key","0");
//跳转页面列表①
    var home_service = document.getElementsByClassName("home-service")[0];
    var linkItem = home_service.children[1].children;
    var linkItem_len = linkItem.length;
    for(var i = 0;i<linkItem_len;i++){
        linkItem[i].index = i;
        linkItem[i].onclick =function () {
            //设置会话储存的键值
            sessionStorage.setItem("key",this.index);
        }
    }
}
function fn2() {
    var sety = sessionStorage.setItem("keys","0");
// 跳转页面列表②
    var home_case = document.getElementsByClassName("home-case")[0];
    var hrefItem = home_case.children[1].children;
    for(var j=0; j<hrefItem.length; j++){
        hrefItem[j].index = j;
        hrefItem[j].onclick = function () {
            //设置会话储存的键值
            sessionStorage.setItem("keys",this.index);
        }
    }
}
