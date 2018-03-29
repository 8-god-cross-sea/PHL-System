'use strict';

$('#loginBTN').click(function() {
    var username = $('input[type=email]').val();
    var password = $('input[type=password]').val();

    USER.login(username, password)
    .then(function(data){
        alert("登陆成功！");
        console.log(data);
    })
    .catch(function(data) {
        alert("登录失败！");
        console.log(data);
        return;
    });
})

$('#logoutBTN').click(function() {
    USER.logout(success, error);

    function success(data) {
        alert("登出成功!");
    }

    function error(data) {
        alert("登出失败!");
    }
})