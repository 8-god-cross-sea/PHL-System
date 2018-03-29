document.cookie = "name = value; path=/";

function ajaxPost(url, data, onSuccess, onError) {
	$.post({
		url: url,
		data: data,
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