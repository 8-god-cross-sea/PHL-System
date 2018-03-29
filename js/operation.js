var base_url = "https://phls.herokuapp.com/api/";
var description = {
    "user": {
        "header": "用户管理",
        "description": "用于管理用户相关内容",
        "data": [{
            "column": "id",
            "description": "用户ID"
        }, {
            "column": "uername",
            "description": "用户名称"
        }, {
            "column": "email", //TMP
            "description": "Email"
        }, {
            "column": "join_date", //TMP
            "description": "加入日期"
        }]
    },
    "department": {
        "header": "科室管理",
        "description": "用于管理科室相关内容",
        "data": [{
            "column": "id",
            "description": "科室ID"
        }, {
            "column": "name",
            "description": "科室名称"
        }, {
            "column": "description", //TMP
            "description": "描述"
        }]
    },
    "medicine": {
        "header": "药品管理",
        "description": "用于管理药品相关内容",
        "data": [{
            "column": "id",
            "description": "药品ID"
        }, {
            "column": "name",
            "description": "中文名称"
        }, {
            "column": "price", //TMP
            "description": "价格"
        }, {
            "column": "count",
            "description": "库存"
        }]
    },
    "assay": {
        "header": "化验管理",
        "description": "用于管理化验相关内容",
        "data": [{
            "column": "id",
            "description": "化验ID"
        }, {
            "column": "patient",
            "description": "宠物ID"
        }, {
            "column": "wbc",
            "description": "基本指标"
        }, {
            "column": "rbc",
            "description": "基本指标"
        }, {
            "column": "plt",
            "description": "基本指标"
        }]
    },
    "vaccine": {
        "header": "疫苗管理",
        "description": "用于管理疫苗相关内容",
        "data": [{
            "column": "id",
            "description": "疫苗ID"
        }, {
            "column": "name",
            "description": "中文名称"
        }, {
            "column": "price", //TMP
            "description": "价格"
        }, {
            "column": "count",
            "description": "库存"
        }]
    },
    "inhospital": {
        "header": "住院管理",
        "description": "用于管理住院相关内容",
        "data": [{
            "column": "id",
            "description": "住院单ID"
        }, {
            "column": "patient",
            "description": "宠物ID"
        }, {
            "column": "join_date", //TMP
            "description": "入院时间"
        }, {
            "column": "leave_date",
            "description": "出院时间"
        }, {
            "column": "status",
            "description": "状态"
        }]
    },
    "patient": {
        "header": "宠物管理",
        "description": "用于管理宠物相关内容",
        "data": [{
            "column": "id",
            "description": "宠物ID"
        }, {
            "column": "name",
            "description": "宠物名称"
        }, {
            "column": "description",
            "description": "备注"
        }]
    },
}

function update_table(entity, id) {
    var old = document.getElementById(entity + "_" + id);
    var tr = "<tr><td>" + old.children[0].innerHTML + "</td>";
    for (var j = 1; j < description[entity]["data"].length; j++) {
        tr += "<td><input value=\"" + old.children[j].innerHTML + "\">" + "</td>";
    }
    tr += "<td>" + get_a_label('update_by_id', '修改', [entity, id]) + get_a_label('update_table_cancel', '取消', [entity, id]) + "</td></tr>";
    document.getElementById(entity + "_" + id).innerHTML = tr;
}

function add_table(entity) {
    var tr = "<tr><td></td>";
    for (var j = 1; j < description[entity]["data"].length; j++) {
        tr += "<td><input required></td>";
    }
    tr += "<td>" + get_a_label('add', '保存', [entity]) + get_a_label('add_table_cancel', '取消', []) + "</td></tr>";
    document.getElementById("tfoot").innerHTML = tr;
}

function add_table_cancel() {
    document.getElementById("tfoot").innerHTML = "";
}

function update_table_cancel(entity, id) {
    var old = document.getElementById(entity + "_" + id);
    var tr = "<tr><td>" + id + "</td>";
    for (var j = 1; j < description[entity]["data"].length; j++) {
        tr += "<td>" + old.children[j].children[0].value + "</td>";
    }
    tr += "<td>" + get_a_label('delete_by_id', '删除', [entity, id]) + get_a_label('update_table', '修改', [entity, id]) + "</td></tr>";
    old.innerHTML = tr;
}

function get_list(entity) {
    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: "json",
        url: base_url + entity + "/",
        xhrFields: {
            withCredentials: true
        },
        success: function (result) {
            var thead = "<tr>";
            var info = description[entity]["data"];
            for (var i = 0; i < info.length; i++) {
                thead += "<th>" + info[i]["description"] + "</th>"
            }
            thead += "<th>操作 " + get_a_label('add_table', '+', [entity]) + "</th></tr>";

            var tbody = "";
            for (var i = 0; i < result["objects"].length; i++) {
                var id = result["objects"][i]["id"];
                tbody += "<tr id=\"" + entity + "_" + id + "\">";
                for (var j = 0; j < info.length; j++) {
                    tbody += "<td>" + result["objects"][i][info[j]["column"]] + "</td>";
                }
                tbody += "<td>" + get_a_label('delete_by_id', '删除', [entity, id]) +
                    get_a_label('update_table', '修改', [entity, id]) + "</td></tr>";
            }
            document.getElementById("thead").innerHTML = thead;
            document.getElementById("tbody").innerHTML = tbody;
            document.getElementById("tfoot").innerHTML = "";
            document.getElementById("header").innerHTML = description[entity]["header"];
            document.getElementById("description").innerHTML = description[entity]["description"];
        },
        error: function () {
            console.log("error");
        }
    });
}

function add(entity) {
    var old = document.getElementById("tfoot").children[0];
    var info = description[entity]["data"];
    var data = "{";
    for (var j = 1; j < info.length; j++) {
        data += "\"" + info[j]["column"] + "\":\"" + old.children[j].children[0].value + "\"";
        if (j < info.length - 1) {
            data += ","
        }
    }
    data += "}";
    $.ajax({
        type: "POST",
        dataType: "json",
        contentType: 'application/json',
        url: base_url + entity + "/",
        data: data,
        success: function () {
            get_list(entity);
        },
        error: function () {
            console.log("error");
        }
    });
}

function delete_by_id(entity, id) {
    $.ajax({
        type: "DELETE",
        dataType: "json",
        url: base_url + entity + "/" + id,
        success: function () {
            document.getElementById(entity + "_" + id).remove();
        },
        error: function () {
            console.log("error");
        }
    });
}

function update_by_id(entity, id) {
    var data = "{";
    var old = document.getElementById(entity + "_" + id);
    var info = description[entity]["data"];
    var tr = "<tr><td>" + id + "</td>";
    for (var j = 1; j < info.length; j++) {
        tr += "<td>" + old.children[j].children[0].value + "</td>";
        data += "\"" + info[j]["column"] + "\":\"" + old.children[j].children[0].value + "\"";
        if (j < info.length - 1) {
            data += ","
        }
    }
    tr += "<td>" + get_a_label('delete_by_id', '删除', [entity, id]) + get_a_label('update_table', '修改', [entity, id]) + "</td></tr>";
    data += "}";

    $.ajax({
        type: "PUT",
        dataType: "json",
        contentType: 'application/json',
        url: base_url + entity + "/" + id,
        data: data,
        xhrFields: {
            withCredentials: true
        },
        success: function () {
            document.getElementById(entity + "_" + id).innerHTML = tr;
        },
        error: function () {
            console.log("error");
        }
    });
}

function get_a_label(func, value, args) {
    var a = "<a style='cursor: pointer' onclick=\"" + func + "(";
    for (var i = 0; i < args.length; i++) {
        a += "'" + args[i] + "'";
        if (i < args.length - 1) {
            a += ",";
        }
    }
    a += ")\">" + value + "</a>";
    return a;
}