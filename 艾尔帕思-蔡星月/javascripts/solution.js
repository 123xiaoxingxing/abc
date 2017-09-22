/**
 * 功能：页面解决方案部分
 * 开发者：
 * 最后修改日期：
 **/
window.onload = function () {
    var keys = sessionStorage.getItem("keys");
    btnlist[keys].onclick();
    sessionStorage.setItem("keys","0");
    creatherf({
        index:"../index.html",
        service:"service.html",
        solution:"solution.html",
        about:"about.html"
    });
}
var imgGroup = [
    {
        name: "全部",
        imgURL:[ "../images/solution-images/case-page-34.png"]
    },
    {
        name: "电子政务",
        imgURL:[
            "../images/solution-images/case-page-1.png",
            "../images/solution-images/case-page-2.png",
            "../images/solution-images/case-page-3.png",
            "../images/solution-images/case-page-4.png"
        ]
    },
    {
        name: "电子商务",
        imgURL: ["../images/solution-images/case-page-5.png",
            "../images/solution-images/case-page-8.png",
            "../images/solution-images/case-page-10.png",
            "../images/solution-images/case-page-11.png"]
    },
    {
        name: "智慧教育",
        imgURL: ["../images/solution-images/case-page-14.png",
            "../images/solution-images/case-page-15.png",
            "../images/solution-images/case-page-16.png",
            "../images/solution-images/case-page-26.png"]
    },
    {
        name: "智慧医疗",
        imgURL: ["../images/solution-images/case-page-23.png",
            "../images/solution-images/case-page-28.png",
            "../images/solution-images/case-page-22.png",
            "../images/solution-images/case-page-27.png"]
    },
    {
        name: "智慧农业",
        imgURL: ["../images/solution-images/case-page-8.png",
            "../images/solution-images/case-page-29.png",
            "../images/solution-images/case-page-30.png",
            "../images/solution-images/case-page-19.png"]
    },
    {
        name: "智慧交通",
        imgURL: ["../images/solution-images/case-page-7.png",
            "../images/solution-images/case-page-31.png",
            "../images/solution-images/case-page-32.png",
            "../images/solution-images/case-page-33.png"]
    },
    {
        name: "智慧旅游",
        imgURL: ["../images/solution-images/case-page-6.png",
            "../images/solution-images/case-page-34.png",
            "../images/solution-images/case-page-35.png",
            "../images/solution-images/case-page-36.png"]
    },
    {
        name: "物联网",
        imgURL: ["../images/solution-images/case-page-17.png",
            "../images/solution-images/case-page-18.png",
            "../images/solution-images/case-page-38.png",
            "../images/solution-images/case-page-37.png"]
    },
    {
        name: "企业级应用",
        imgURL: ["../images/solution-images/case-page-20.png",
            "../images/solution-images/case-page-21.png",
            "../images/solution-images/case-page-24.png",
            "../images/solution-images/case-page-25.png"]
    }
];
var solution_view =document.getElementsByClassName("solution_view")[0],
    imgshow = document.getElementsByClassName("imgshow")[0];
for(var i=0;i<imgGroup.length;i++){
    solution_view.innerHTML += "<a>" + imgGroup[i].name + "</a>";
    creatlist();
}
var btnlist = document.getElementsByClassName("solution_view")[0].children;
function creatlist() {
    var btnlist = document.getElementsByClassName("solution_view")[0].children,
        btnlist_leng = btnlist.length;
    btnlist[0].classList.add("active");
    var arr = [];
    for (var i = 0; i < btnlist_leng; i++) {
        btnlist[i].index = i;
        arr.push(btnlist[i].textContent);
        creatDiv("全部");
        btnlist[i].onclick = function () {
            delClass();
            this.className = "active";
            switch (arr[this.index]) {
                case "全部":
                    creatDiv("全部");
                    break;
                case"电子政务":
                    creatDiv("电子政务");
                    break;
                case "电子商务":
                    creatDiv("电子商务");
                    break;
                case "智慧教育":
                    creatDiv("智慧教育");
                    break;
                case "智慧医疗":
                    creatDiv("智慧医疗");
                    break;
                case "智慧农业":
                    creatDiv("智慧农业");
                    break;
                case "智慧交通":
                    creatDiv("智慧交通");
                    break;
                case "智慧旅游":
                    creatDiv("智慧旅游");
                    break;
                case "物联网":
                    creatDiv("物联网");
                    break;
                default:
                    creatDiv("企业级应用");
            }
        }
    }

    function delClass() {
        for (var i = 0; i <  btnlist_leng; i++) {
            btnlist[i].className = "";
        }
    }

}
function creatDiv(param) {
    var count = "";
    for (var i = 1; i < imgGroup.length; i++) {
        for (var j = 0; j < imgGroup[i].imgURL.length; j++) {
            if (imgGroup[i].name === param || param === "全部") {
                count += '<div><img src="' + imgGroup[i].imgURL[j] + '"></div>'
            }
        }
        imgshow.innerHTML=count;
    }
}


