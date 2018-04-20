var base_url = "https://phls.herokuapp.com/api/";

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
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
            console.log(result);//打印服务端返回的数据(调试用)
            if (result.ret_code == 0) {
                if (username == "admin") {
                    window.location.href = 'index.html';//
                } else {
                    window.location.href = 'study.html';//
                }
            }
        },
        error: function (result) {
            console.log(result);
        }
    });
}

function logout() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: base_url + "user/logout",
        xhrFields: {withCredentials: true},
        success: function () {
            window.location.href = 'login.html';
        },
        error: function (error) {
            console.log(error);
            window.location.href = 'error.html';
        }
    });
}