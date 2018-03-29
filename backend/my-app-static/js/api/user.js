'use strict';

var USER ={};

USER.prototype.login = function (username, password, callback, errCallback) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user/login";
    var data = {
        username: username,
        password: password
    };

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        if (data.status == 200) {
            callback(data);
        } else {
            errCallback(data);
        }
    }

    AJAX.post(url, data, onSuccess, onError);
}

USER.prototype.logout = function (callback) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user/logout";
    var data = null;

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        if (data.status == 200) {
            callback(data);
        } else {
            errCallback(data);
        }
    }

    AJAX.post(url, data, onSuccess, onError);
}

USER.prototype.register = function (username, password, callback, errCallback) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user";
    var data = "username={{username}}&password={{password}}"
        .replace("{{username}}", username)
        .replace("{{password}}", password);

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        errCallback(data);
    }

    ajaxPost(url, data, onSuccess, onError);
}

USER.prototype.getUserInfo = function (userId, callback, errCallback) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user/{{userId}}"
        .replace("{{userId}}", userId);

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        errCallback(data);
    }

    AJAX.get(url, onSuccess, onError);
}

USER.prototype.updateUserInfo = function (email, callback, errCallback) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user/{{userId}}"
        .replace("{{userId}}", userId);
    var data = "email={{email}}}"
        .replace("{{email}}",email)


    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        errCallback(data);
    }

    ajaxPut(url, data, onSuccess, onError);
}

USER.prototype.deleteUserInfo = function (userId, callback, errCallback) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user/{{userId}}"
        .replace("{{userId}}", userId);


    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        errCallback(data);
    }

    AJAX.delete(url, data, onSuccess, onError);
}