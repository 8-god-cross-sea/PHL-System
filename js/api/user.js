'use strict';

function login(username, password, callback, errCallback) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user/login";
    var data = "username={{username}}&password={{password}}"
        .replace("{{username}}", username)
        .replace("{{password}}", password);

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

    ajaxPost(url, data, onSuccess, onError);
}

function logout(callback) {
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

    ajaxPost(url, data, onSuccess, onError);
}

function register(username, password, callback, errCallback) {
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

function getUserInfo(userId, callback, errCallback) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user/{{userId}}"
        .replace("{{userId}}", userId);

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        errCallback(data);
    }

    ajaxGet(url, onSuccess, onError);
}

function updateUserInfo(email, callback, errCallback) {
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

function deleteUserInfo(userId, callback, errCallback) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user/{{userId}}"
        .replace("{{userId}}", userId);


    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        errCallback(data);
    }

    ajaxDelete(url, data, onSuccess, onError);
}