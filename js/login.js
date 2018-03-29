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
    USER.logout()
    .then(function(data) {

    })
    .catch(function(data) {

    });
})