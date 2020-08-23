// ==UserScript==
// @name         录取结果
// @namespace    http://www.sorasky.in/
// @version      0.1
// @description  福建省教育考试院 录取结果 自动填写帐号密码考生号
// @author       Sora
// @match        http://gk.eeafj.cn/jsp/result/lqjg/result_enter.jsp
// @grant        none
// @require      https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var name = "身份证号"; //身份证号
    var pwd = "密码"; //密码
    var id = "考生号"; //考生号
    $("#logname").val(name);
    $("#pwd").val(pwd);
    $("input[name='ksh']").val(id);
    document.getElementById("check").focus();
})();
