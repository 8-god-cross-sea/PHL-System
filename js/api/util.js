'use strict';

document.cookie = "name = value; path=/";

var AJAX = {};

AJAX.prototype.post = function (url, data, onSuccess, onError) {
	// $.post({
	// 	url: url,
	// 	data: data,
	// 	xhrFields: {withCredentials: true},
	// 	contentType: "Content-Type:application/x-www-form-urlencoded",
	// 	success: function(data) {
	// 		onSuccess(data);
	// 	},
	// 	error: function(data) {
	// 		onError(data);
	// 	}
	// })
	$.post({
		url: url,
		data: JSON.stringify(data),
		// xhrFields: {withCredentials: true},
		contentType: "application/json;charset=utf-8",
		success: function(data) {
			onSuccess(data);
		},
		error: function(data) {
			onError(data);
		}
	})
}

AJAX.prototype.postJSON = function (url, data, onSuccess, onError) {
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
}

AJAX.prototype.put = function (url, data, onSuccess, onError) {
	$.ajax({
		url: url,
		type: 'PUT',
		data: data,
		xhrFields: {withCredentials: true},
		contentType: "Content-Type:application/x-www-form-urlencoded",
		success: function(data) {
			onSuccess(data);
		},
		error: function(data) {
			onError(data);
		}
	})

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

AJAX.prototype.delete = function (url, data, onSuccess, onError) {
	$.ajax({
		url: url,
		type: 'DELETE',
		xhrFields: {withCredentials: true},
		contentType: "Content-Type:application/x-www-form-urlencoded",
		success: function(data) {
			onSuccess(data);
		},
		error: function(data) {
			onError(data);
		}
	})
}

AJAX.prototype.get = function (url, onSuccess, onError) {
	$.get({
		url: url,
		success: function(data) {
			onSuccess(data);
		},
		error: function(data) {
			onError(data);
		}
	})
}