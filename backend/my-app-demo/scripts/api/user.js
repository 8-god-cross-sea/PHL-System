function login(username, password, url, callback, errCallback) {
    var jump = "http://www.zsliying.com/login";
    var data = {
        username: username,
        password: password
    }

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        if (data.status == 302) {
            callback(data);
        } else {
            errCallback(data);
        }
    }


    ajaxPost(jump, data, onSuccess, onError);
}

function logout(callback) {
    var url = "http://www.zsliying.com/logout";

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        switch (data.status) {
            case 0:
                break;
            case 302:
                callback(data);
                break;
        }
    }

    ajaxGet(url, onSuccess, onError);
}

function register(username, password, callback) {
    var url = "http://www.zsliying.com/signup";

    var data = {
        username: username,
        password: password
    }

    function onSuccess(data, callback) {
        console.log(data);
        alert("注册成功")
    }

    function onError(data, callback) {
        console.log(data);
        alert("注册失败")
    }

    ajaxPostJSON(url, data, onSuccess, onError);
}

function getCouponList(userId, callback) {
    var url = "http://www.zsliying.com/user/viewCoupon"

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        console.log(data);
    }

    ajaxGet(url, onSuccess, onError);
}

function getOrderList(page, status, callback) {
    var url = "http://www.zsliying.com/user/viewOrder";
    if (status) {
        var data = {
            status: status,
            page: page,
            count: 10
        }
    } else {
    	var data = {
            page: page,
            count: 10
        }
    }

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        console.log(data);
    }

    ajaxPostJSON(url, data, onSuccess, onError);
}


function getAddress(callback) {
    var url = "http://www.zsliying.com/receiver/get";

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        console.log(data);
    }

    ajaxGet(url, onSuccess, onError);
}

function saveAddress(item, callback) {
    var url = "http://www.zsliying.com/receiver/save";

    var data = item;

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        console.log(data);
    }

    ajaxPostJSON(url, data, onSuccess, onError);
}

function createAddress(item, callback) {
    var url = "http://www.zsliying.com/receiver/create";

    var data = item;

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        console.log(data);
    }

    ajaxPostJSON(url, data, onSuccess, onError);
}

function deleteAddress(id, callback) {
    var url = "http://www.zsliying.com/receiver/delete";

    var data = {
        id: id
    };

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        console.log(data);
    }

    ajaxPostJSON(url, data, onSuccess, onError);
}

function leaveComment(name, content, callback) {
    var url = "http://www.zsliying.com/bbs/save";

    var data = {
        name: name,
        content: content
    };

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        console.log(data);
    }

    ajaxPostJSON(url, data, onSuccess, onError);
}

function commentsGet(page ,callback,errorCallback) {
    var url = 'http://www.zsliying.com/bbs/get?page=' + page + '&count=' + 10;

    function onSuccess(data) {
        callback(data);
    }

    function onError(data) {
        if(errorCallback) {
            errorCallback(data);
        } else {
            console.log('error');
        }
    }

    ajaxGet(url, onSuccess, onError);
}