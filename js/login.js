'use strict';

$('#loginBTN').click(function() {
    var username = $('input[type=email]').val();
    var password = $('input[type=password]').val();

    USER.login(username, password, successLogin, errorLogin);

    function successLogin(data) {
        alert("登陆成功！");
        window.location.href = "../index.html";
    }

    function errorLogin(data) {
        alert("登录失败！");
        return;
    }
})