'use strict';

document.cookie = "name = value; path=/";

var AJAX = {};

AJAX.post = function (url, data) {
	return new Promise(function(resolve, reject) {
        $.post({
			url: url,
			data: JSON.stringify(data),
			// xhrFields: {withCredentials: true},
			contentType: "application/json;charset=utf-8"
		})
		.done(function(data) {
			resolve(data);
		})
		.fail(function(data) {
			reject(data);
		})
    });
}

AJAX.postJSON = function (url, data) {
	$.post({
		url: url,
		data: JSON.stringify(data),
		xhrFields: {withCredentials: true},
		contentType: "application/json;charset=utf-8",
		success: function(data) {
			onSuccess(data);
		},
		error: function(data) {
			onError(data);
		}
	})
	.done(function(data) {
		onSuccess(data);
	})
	.fail(function(data) {
		onError(data);
	})
}

AJAX.put = function (url, data) {
	return new Promise(function(resolve, reject) {
        $.post({
			url: url,
			data: JSON.stringify(data),
			// xhrFields: {withCredentials: true},
			contentType: "application/json;charset=utf-8"
		})
		.done(function(data) {
			resolve(data);
		})
		.fail(function(data) {
			reject(data);
		})
    });

	// var xhr = new XMLHttpRequest();  
	// if (xhr.withCredentials === undefined) {  
 //        return;  
 //    }
 //    xhr.open("POST", url);  
 //    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");  

 //    xhr.onreadystatechange = function () {  
 //    if (xhr.readyState !== 4) return;
 //    	if (xhr.status === 200) {
 //    		onSuccess(data);
	//     } else {
	//     	onError(data);
	//     }
	// }  

	// xhr.send(data);  
}

AJAX.delete = function (url, data) {
	return new Promise(function(resolve, reject) {
        $.ajax({
			url: url,
			method: "DELETE",
			data: JSON.stringify(data),
			// xhrFields: {withCredentials: true},
			contentType: "application/json;charset=utf-8"
		})
		.done(function(data) {
			resolve(data);
		})
		.fail(function(data) {
			reject(data);
		})
    });
}

AJAX.get = function (url) {
	return new Promise(function(resolve, reject) {
        $.ajax({
			url: url,
			method: "GET",
			data: JSON.stringify(data),
			// xhrFields: {withCredentials: true},
			contentType: "application/json;charset=utf-8"
		})
		.done(function(data) {
			resolve(data);
		})
		.fail(function(data) {
			reject(data);
		})
    });
}