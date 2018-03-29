'use strict';

document.cookie = "name = value; path=/";

function ajaxPost(url, data, onSuccess, onError) {
	$.post({
		url: url,
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
}

function ajaxPut(url, data, onSuccess, onError) {
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
}

function ajaxDelete(url, data, onSuccess, onError) {
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

function ajaxPostJSON(url, data, onSuccess, onError) {
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

function ajaxGet(url, onSuccess, onError) {
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