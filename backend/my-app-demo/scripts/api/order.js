function getItemTypeList (callback) {
	var url = "http://www.zsliying.com/purchase/getItemTypeList";

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		console.log(data);
	}

	ajaxGet(url, onSuccess, onError);
}

function getItemListByType (page, count, category, callback) {
	var url = "http://www.zsliying.com/item/getByCategory?page=" + page + "&count=" + count + "&category=" + category;

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		console.log(data);
	}

	ajaxGet(url, onSuccess, onError);
}

function getItemList (page, count, callback) {
	var url = "http://www.zsliying.com/purchase/getItemList?page=" + page + "&count=" + count;

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		console.log(data);
	}

	ajaxGet(url, onSuccess, onError);
}

function search(page, count, keywords, callback) {
	var url = "http://www.zsliying.com/item/search?page=" + page + "&count=" + count + "&keyword=" + keywords; 

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		console.log(data);
	}

	ajaxGet(url, onSuccess, onError);
}

function getItemDetails () {
	var url = "http://www.zsliying.com/item/get?page=" + page + "&count=" + count;



	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		console.log(data);
	}

	ajaxGet(url, onSuccess, onError);
}

function getCart (callback) {
	var url = "http://www.zsliying.com/purchase/getCart"; 

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		console.log(data);
	}

	ajaxGet(url, onSuccess, onError);
}

function getStore (callback) {
	var url = "http://www.zsliying.com/store/get";

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		console.log(data);
	}

	ajaxGet(url, onSuccess, onError);
}

function addToCart (itemId, count, callBack) {
	var url = "http://www.zsliying.com/purchase/addToCart";

	var  data = {
		itemId: itemId,
		count: count
	}

	function onSuccess (data) {
		callBack(data);
	}

	function onError (data) {
		console.log(data);
	}

	ajaxPostJSON(url, data, onSuccess, onError);
}

function getOrderDetails (orderId, callback) {
	var url = "http://www.zsliying.com/co/get?coId=" + orderId;

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		console.log(data);
	}

	ajaxGet(url, onSuccess, onError);
}

function createOrder(data, callback) {
	var url = "http://www.zsliying.com/co/create";

	var data = data;

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		console.log(data);
		alert("創建訂單失敗");
	}

	ajaxPostJSON(url, data, onSuccess, onError);
}

function orderAppointment(item, callback, errorCallback) {
	var url = "http://www.zsliying.com/installation/appointment";

	var data = item;

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		console.log(data);
	}

	ajaxPostJSON(url, data, onSuccess, onError);
}

function orderComment(orderId, userId, comment, callback) {
	var url = "http://www.zsliying.com/installation/comment";

	var data = {
		source: userId,
		orderId: orderId,
		comment: comment
	};

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		console.log(data);
	}

	ajaxPostJSON(url, data, onSuccess, onError);
}

function setOrderStatus(coId, status, callback) {
	var url = "http://www.zsliying.com/co/updateStatus";

	var data = {
		coId: coId,
		status: status
	};

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		console.log(data);
	}

	ajaxPostJSON(url, data, onSuccess, onError);
}

function getItemDetails(itemId, callback, errorCallback) {
	var url = "http://www.zsliying.com/item/getOne?id=" + itemId;

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		errorCallback(data);
	}

	ajaxGet(url, onSuccess, onError);
}

function orderPay(itemId, callback, errorCallback) {
	var url = "http://www.zsliying.com/co/pay?coId=" + itemId;

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		errorCallback(data);
	}

	ajaxGet(url, onSuccess, onError);
}

function appointmentGet(coId, callback, errCallback) {
	var jump = "http://www.zsliying.com/installation/get?coId=" + coId;

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		if (errCallback)
			errCallback(data);
		else
			console.log(data);
	}

	ajaxGet(jump, onSuccess, onError);
}

function itemDetailGet(itemId, callback, errCallback) {
	var jump = "http://www.zsliying.com/item/getPic?itemId=" + itemId;

	function onSuccess (data) {
		callback(data);
	}

	function onError (data) {
		if (errCallback)
			errCallback(data);
		else
			console.log(data);
	}

	ajaxGet(jump, onSuccess, onError);
}

function itemPicGet(obj, id, callback, errCallback) {
	var jump = "http://www.zsliying.com/item/pic?itemId=" + id;

	function onSuccess (data) {
		callback(obj, data);
	}

	function onError (data) {
		if (errCallback)
			errCallback(data);
		else
			console.log(data);
	}

	ajaxGet(jump, onSuccess, onError);
}