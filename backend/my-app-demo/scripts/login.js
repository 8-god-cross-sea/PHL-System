$("#loginBTN").click(function() {
    var loginUsername = $(".username-input").val();
    var loginPassword = $(".password-input").val();

    login(loginUsername, loginPassword, null, successLogin, errorLogin);

    function successLogin(data) {
        $.cookie("username", loginUsername, { expires: 1, path: '/' });
        $.cookie("password", loginPassword, { expires: 1, path: '/' });
        alert("登陆成功！");
        window.location.href = "../index.html";
    }

    function errorLogin(data) {
        alert("登录失败！");
        return;
    }
})

$("#registerBTN").click(function() {
    var username = $(".register-username-input").val();
    var password = $(".register-password-input").val();
    var pass = $(".register-password-reinput").val();

    if (validate(username, password, pass)) {
        register(username, password, successRegister);
    }

    function validate(username, password, pass) {
        if (username == null || password == null || username == null || password == null ){
            alert("请输入手机和密码不能为空！");
            return false;
        }

        if (parseInt(username) == NaN || username.length != 11) {
            alert("用户名请使用手机号码！");
            return false;
        }

        if (password != pass) {
            alert("密码输入不一致！");
            return false;
        }
    }

    function successRegister(data) {
        alert("成功注册！")
        console.log(data);
    }
});

$("#swap-login").click(function(e) {
    $(".swap-active").removeClass("swap-active");
    $(this).addClass("swap-active");
    $(".register-content").removeClass("content-active");
    $(".login-content").addClass("content-active");
})

$("#swap-register").click(function(e) {
    $(".swap-active").removeClass("swap-active");
    $(this).addClass("swap-active");
    $(".login-content").removeClass("content-active");
    $(".register-content").addClass("content-active");
})

$("#logout").click(function() {
    $.cookie("username", null, { path: '/' });
    $.cookie("password", null, { path: '/' });
    logout();
})

$(document).on("keydown", "#search-box input", function(e) {
    if (e.which == 13) {
        var loginUsername = $(".username-input").val();
        var loginPassword = $(".password-input").val();

        login(loginUsername, loginPassword, null, successLogin, errorLogin);

        function successLogin(data) {
            alert("登录成功！")
            $.cookie("username", loginUsername, { expires: 1, path: '/' });
            $.cookie("password", loginPassword, { expires: 1, path: '/' });
            window.location.href = "../index.html";
        }

        function errorLogin(data) {
            alert("登录失败！")
            return;
        }
    }
})