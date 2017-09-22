/**
 * 功能：页面页眉和页脚公共部分
 * 开发者：
 * 最后修改日期：
 **/
/************************************************************************/
var header = document.getElementsByTagName("header")[0];
creatherf({
    index: "../index.html",
    service: "service.html",
    solution: "solution.html",
    about: "about.html"
});
function creatherf(param) {
    //获取页眉
    header.innerHTML = '<div class="logo"></div>' +
        '<div class="menu">' +
        '<a href="'+ param.index +'">首页</a>' +
        '<a href="' + param.service + '">服务与支持</a>' +
        '<a href="' + param.solution + '">解决方案</a>' +
        '<a href="' + param.about + '">关于我们</a>' +
            '<a id="register">注册</a>' +'<a id="ring_up">登录</a>'+
        '</div>';
    createpop();
}
//获取页脚
    var footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML +=  '<div class="footer-content">' +
        '<div>' +
        '<span>服务</span>' +
        '<a>软件定制</a>' +
        '<a>软件系统集成</a>' +
        '<a>信息化建设咨询</a>' +
        '<a>网络运营</a>' +
        '</div>' +
        '<div>' +
        '<span>运营</span>' +
        '<a>微信运营</a>' +
        '<a>APP运营</a>' +
        '<a>SEM</a>' +
        '<a>SEO</a>' +
        '</div>' +
        '<div>' +
        '<span>产品</span>' +
        '<a>电子商务平台</a>' +
        '<a>数字校园平台</a>' +
        '<a>物联网平台</a>' +
        '<a>数据采集监控平台</a>' +
        '<a>IT技术服务</a>' +
        '</div>' +
        '<div>' +
        '<span>公司</span>' +
        '<a>团队</a>' +
        '<a>职位</a>' +
        '<a>联系</a>' +
        '<a>魏蜀吴</a>' +
        '</div>' +
        '</div>' +
        '<div class="copyright">' +
        '<span>Copy right 2015 成都艾尔帕思科技有限公司 All Rights Reserved 蜀ICP备 15031645号-1</span>' +
        '</div>';
//获取登录框和注册框
function createpop() {
    var register = document.getElementById("register"),
        ring_up = document.getElementById("ring_up"),
        popup_box =  document.getElementsByTagName("body")[0];
    register.onclick =  function () {
        var div = document.createElement("div");
        div.setAttribute("class","popbox_main");
        div.innerHTML =  '<div class="maskLayer"></div>' +
            '<form>' + '<span id="btn">x</span>' +
            '<div>' +
            '<p class="erroMesg"></p>' +
            '<label>帐号：</label>' +
            '<input id="accounts" name="accounts" type="text" placeholder="请输入帐号">' +
            '<span class="required">*</span>' +
            '</div>' +
            '<div>' +
            '<p class="erroMesg"></p>' +
            '<label>密码：</label>' +
            '<input id="pwd" name="pwd" type="password" maxlength="16" placeholder="请输入6~16位数密码">' +
            '<span class="required">*</span>' +
            '</div>' +
            '<div>' +
            '<p class="erroMesg"></p>' +
            '<label>确认密码：</label>' +
            '<input id="repwd" name="repwd" type="password" maxlength="16" placeholder="再次输入密码">' +
            '<span class="required">*</span>' +
            '</div>' +
            '<div class="form-group">' +
            '<p class="erroMesg"></p>' +
            '<label>验证码：</label>' +
            '<input id="txtValiCode" type="text">' +
            '<span class="required">*</span>' +
            '<span id="valiCode" title="点击刷新"></span>' +
            '</div>' +
            '<div class="buttonGroup">' +
            '<button id="signUp" type="button">注册</button>' +
            '</div>' +
            '</form>'
        popup_box.appendChild(div);
       // 遮罩层样式
       var popbox_main = document.getElementsByClassName("popbox_main")[0];
        popbox_main.style.zIndex = "501";
        //调用验证码
        creatverification ();
        //关闭按钮
        creatbtn();
        //表单内容
        creatform();
    }
}
//验证码
function creatverification () {
    var valiCode = document.getElementById("valiCode");
    var strCode = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// 点击调用
    valiCode.onclick = function() {
        createValiCode(5);
    }
// 载入时调用
    createValiCode(5);
    function createValiCode(num) {
        var str = "";
        // 获取原字符串长度(62)
        var code_length = strCode.length;
        for(var i = 0; i < num; i++) {
            // 求0~61之间的随机数
            var randomNum = Math.floor(Math.random() * code_length);
            str += strCode.charAt(randomNum);
        }
        valiCode.textContent = str;
    }
}
//关闭按钮
function creatbtn() {
    var btn = document.getElementById("btn"),
        popbox_main = document.getElementsByClassName("popbox_main")[0];
    btn.onclick = function () {
        btn.parentNode.parentNode.remove();
        popbox_main.style.zIndex = "-1";
    }
}
//表单内容
function creatform() {
    var pwd = document.getElementById("pwd"), pwdStatus = false,
        accounts = document.getElementById("accounts"), accountsStatus = false,
        repwd = document.getElementById("repwd"), repwdStatus = false,
        txtValiCode =document.getElementById("txtValiCode"), txtValiCodeStatus = false,
// 两次密码的一致性
    uniformity = false;
// 注册按钮
    var signUp = document.getElementById("signUp");
// 账号
    accounts.onblur = function() {
        // 调用“输入框失去焦点验证”函数
        accountsStatus = blurHandle(this);
        var erroMesg = document.getElementsByClassName("erroMesg")[0];
        var thisval = this.value;
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/g;
        if(reg.test(thisval)){
            erroMesg.textContent = "";
        }
        else {
            erroMesg.textContent = "请输入账号正确格式"
        }

    }
// 账号（键盘松开）
    accounts.onkeyup = function() {
        accountsStatus = blurHandle(this, "请填写账号");
    }

// 密码（失去焦点）
    pwd.onblur = function () {
        pwdStatus = blurHandle(this);
        // 调用“两次密码一致性核对”函数
        checkUniformity(this);
        var erroMesg = document.getElementsByClassName("erroMesg")[1];
        var thisval = this.value;
        var reg = /^[0-9a-zA-Z]{6,16}$/g;
        if (reg.test(thisval)) {
            erroMesg.textContent = "";
        }
        else {
            erroMesg.textContent = "请输入密码正确格式"
        }
    }
// 密码（键盘松开）
    pwd.onkeyup = function () {
        pwdStatus = blurHandle(this, "请填写密码");
    }
// 确认密码（失去焦点）
    repwd.onblur = function () {
        repwdStatus = blurHandle(this);
        checkUniformity(this);
        var erroMesg = document.getElementsByClassName("erroMesg")[2];
        var thisval = this.value;
        var reg =  /^[0-9a-zA-Z]{6,16}$/g;
        if (reg.test(thisval)) {
            erroMesg.textContent = "";
        }
        else {
            erroMesg.textContent = "请输入密码正确格式"
        }
    }
// 确认密码（键盘松开）
    repwd.onkeyup = function () {
        repwdStatus = blurHandle(this, "请确认一次密码");
    }

    //验证码
    txtValiCode.onblur = function () {
        // creatverification ();
        txtValiCodeStatus = blurHandle(this);
        checkUniformity(this);
        var erroMesg = document.getElementsByClassName("erroMesg")[3];
        var thisval = this.value;
        var reg = valiCode.textContent;
        if (reg === thisval) {
            erroMesg.textContent = "";
        }
        else {
            erroMesg.textContent = "请输入验证码"
        }
    }
// 确认验证码（键盘松开）
    txtValiCode.onkeyup = function () {
        txtValiCodeStatus = blurHandle(this, "请确认验证码");
    }
    // 注册按钮点击事件
    signUp.onclick = function() {
        // 运行一次所有表单元素的“失去焦点”事件
        accounts.onblur();
        pwd.onblur();
        repwd.onblur();
        txtValiCode.onblur();
        var btn = document.getElementById("btn"),
            popbox_main = document.getElementsByClassName("popbox_main")[0];
        // 检查表单元素状态值是否为真（true）,最后一个条件是判断两次密码是否一致
        if( pwdStatus && repwdStatus && accountsStatus && txtValiCodeStatus && uniformity) {
           alert("登陆成功！");
            btn.parentNode.parentNode.remove();
            popbox_main.style.zIndex = "-1";
        }
        // 如果有值存在错误
        else {
            alert("表单填写有误，请检查！");
        }
    }

    /**
     * 功能：输入框失去焦点验证
     * 参数：1、标识符；2、提示语
     **/
    function blurHandle(ident) {
        // 获取当前表单元素的值
        var thisVal = ident.value;
        // 存储错误信息节点元素
        var erroMesg = ident.previousElementSibling.previousElementSibling;

        // 如果当前的值为空
        if (thisVal === "") {
            // 设置红色边框进行提示
            ident.style.borderColor = "#e00";
            return false;
        }
        // 否则
        else {
            erroMesg.textContent = "";
            // 恢复原来边框的颜色
            ident.style.borderColor = "#999";
            return true;
        }
    }

    /**
     * 功能：两次密码一致性核对
     * 参数：标识符
     **/
    function checkUniformity(ident) {
        // 获取两次密码输入的值
        var pwdVal = pwd.value,
            repwdVal = repwd.value;
        // 存储错误信息节点元素
        var thisErroMesg = ident.previousElementSibling.previousElementSibling,
            pwdErroMesg = pwd.previousElementSibling.previousElementSibling,
            repwdErroMesg = repwd.previousElementSibling.previousElementSibling;
        // 如果密码和确认密码都通过非空验证
        if (pwdStatus && repwdStatus) {
            // 如果两次输入的不一致，并且都不为空
            if (pwdVal !== repwdVal) {
                thisErroMesg.textContent = "两次输入的密码不一致，请检查";
                uniformity = false;
            }
            else {
                pwdErroMesg.textContent = "";
                repwdErroMesg.textContent = "";
                uniformity = true;
            }
        }

    }
}



/*****************************
 * 功能：导航选中状态
 ****************************/
var navigation = document.getElementsByClassName("menu")[0].children;
for (var i = 0; i < navigation.length; i++) {
    navigation[i].onclick = function () {
        emptyColor();
        this.className = "active";
    }
}

/**********************************
 *功能 ：清空导航背景颜色
 **********************************/
function emptyColor() {
    for (var i = 0; i < navigation.length; i++) {
        navigation[i].className = "";
    }
}


