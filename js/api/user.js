'use strict';

var USER ={};
USER.info = {};

USER.login = function (username, password) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user/login";
    var data = {
        username: username,
        password: password
    };

    return new Promise(function(resolve, reject) {
        AJAX.post(url, data)
        .then(function(data) {
            if (data.ret_code != 0){
                reject(data);
            }
            resolve(data);
        })
        .catch(function(data) {
            reject(data);
        });
    });
}

USER.logout = function () {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user/logout";
    var data = null;

    return new Promise(function(resolve, reject) {
        AJAX.post(url, data)
        .then(function(data) {
            if (data.ret_code != 0){
                reject(data);
            }
            resolve(data);
        })
        .catch(function(data) {
            reject(data);
        });
    });
}

USER.register = function (username, password, callback, errCallback) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user";
    var data = "username={{username}}&password={{password}}"
        .replace("{{username}}", username)
        .replace("{{password}}", password);

    return new Promise(function(resolve, reject) {
        AJAX.post(url, data)
        .then(function(data) {
            if (data.ret_code != 0){
                reject(data);
            }
            resolve(data);
        })
        .catch(function(data) {
            reject(data);
        });
    });
}

USER.info.get = function (userId, callback, errCallback) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user/{{userId}}"
        .replace("{{userId}}", userId);

    return new Promise(function(resolve, reject) {
        AJAX.get(url, data)
        .then(function(data) {
            if (data.ret_code != 0){
                reject(data);
            }
            resolve(data);
        })
        .catch(function(data) {
            reject(data);
        });
    });
}

USER.info.update = function (email, callback, errCallback) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user/{{userId}}"
        .replace("{{userId}}", userId);
    var data = "email={{email}}}"
        .replace("{{email}}",email)

    return new Promise(function(resolve, reject) {
        AJAX.put(url, data)
        .then(function(data) {
            if (data.ret_code != 0){
                reject(data);
            }
            resolve(data);
        })
        .catch(function(data) {
            reject(data);
        });
    });
}

USER.info.delete = function (userId, callback, errCallback) {
    var url = "http://frozen-retreat-73403.herokuapp.com/api/user/{{userId}}"
        .replace("{{userId}}", userId);


    return new Promise(function(resolve, reject) {
        AJAX.delete(url, data)
        .then(function(data) {
            if (data.ret_code != 0){
                reject(data);
            }
            resolve(data);
        })
        .catch(function(data) {
            reject(data);
        });
    });
}