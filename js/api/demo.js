'use strict';

var DEMO = {}
DEMO.data = {}

DEMO.data.change = function (data) {
    var url = "";

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