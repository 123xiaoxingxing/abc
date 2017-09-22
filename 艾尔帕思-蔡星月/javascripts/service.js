/**
 * 功能：页面服务与支持
 * 开发者：
 * 最后修改日期：
 **/
window.onload=function () {
    var key = sessionStorage.getItem("key");
    btnalist[key].onclick();
    sessionStorage.setItem("key","0");
    creatherf({
        index:"../index.html",
        service:"service.html",
        solution:"solution.html",
        about:"about.html"
    });
}
//获取a标签
var btnalist = document.getElementsByClassName("btna")[0].children,
//获取banner图
    bannerlist = document.getElementsByClassName("banner"),
    //获取展示内容
    software = document.getElementsByClassName("software")[0],
    //获取展示列表
    service_detail =document.getElementsByClassName("service-detail")[0].children,
    //获取span标签
    indicator = document.getElementsByClassName("indicator")[0];

    //调用：点击控制台切换“详情”子元素的显示内容函数
    tabList();
    indicator.style.left = btnalist[0].offsetLeft + "px";

window.onresize = function(){
    var activeEle = document.getElementsByClassName("btna")[0].getElementsByClassName("active")[0];
    indicator.style.left = activeEle.offsetLeft + "px";
    indicator.style.width = activeEle.offsetWidth + "px";
}
function tabList() {
//    获取按钮长度
    var btnalist_leng = btnalist.length;
    //判断banner图和判断展示列表
    for(var i=0;i<btnalist_leng; i++){
        bannerlist[0] .classList.add("banner_software");
        if(bannerlist[i].className === "banner banner_software" || service_detail[i].className === "software"){
            bannerlist[i].style.display = "block";
            service_detail[i].style.display = "block";
        }else {
            bannerlist[i].style.display = "none";
            service_detail[i].style.display = "none";
        }
    }
//    按钮点击事件
    for(var m=0; m<btnalist_leng;m++){
        btnalist[m].index = m;
        btnalist[m].onclick = function () {
            clearclass();
          //  给按钮a添加选中状态
            this.setAttribute("class","active");
          for(var k=0; k<btnalist_leng; k++){
              if(this.index != k){
                  bannerlist[k].style.display = "none";
                  service_detail[k].style.display = "none";
              }else {
                  bannerlist[k].style.display = "block";
                  service_detail[k].style.display = "block";
                  indicator.style.left = this.offsetLeft + "px";
              }
          }
        }
    }
}
function clearclass() {
    for(var j=0 ;j<btnalist.length; j++){
        btnalist[j].className = "";
    }
}




