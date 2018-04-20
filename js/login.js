var base_url = "https://phls.herokuapp.com/api/";

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    $("#loading_img").show();
    $.ajax({
        type: "POST",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        crossDomain: true,
        contentType: 'application/json',
        url: base_url + "user/login",//url
        data: JSON.stringify({
            "username": username,
            "password": password,
        }),
        xhrFields: {withCredentials: true},
        success: function (result) {
            $("#loading_img").hide();
            if (result.ret_code == 0) {
                if (username == "admin") {
                    window.location.href = 'index.html';//
                } else {
                    window.location.href = 'study.html';//
                }
            }
        },
        error: function (result) {
            $("#loading_img").hide();
            console.log(result);
        }
    });
}

function logout() {
    $("#loading_img").show();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: base_url + "user/logout",
        xhrFields: {withCredentials: true},
        success: function () {
            $("#loading_img").hide();
            window.location.href = 'login.html';
        },
        error: function (error) {
            $("#loading_img").hide();
            console.log(error);
        }
    });
}