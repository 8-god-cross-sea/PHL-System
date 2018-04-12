var base_url = "https://phls.herokuapp.com/api/";
var add_list = {};
var description = {
    "user": {
        "header": "用户管理",
        "description": "用户相关内容：包括用户名称、Email、加入日期",
        "data": [
            // {
            //     "column": "id",
            //     "description": "用户ID"
            // },
            {
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
        "description": "科室相关内容：科室名称、描述",
        "data": [
            // {
            //     "column": "id",
            //     "description": "科室ID"
            // },
            {
                "column": "name",
                "description": "科室名称"
            }, {
                "column": "description", //TMP
                "description": "描述"
            }]
    },
    "medicine": {
        "header": "药品管理",
        "description": "药品相关内容：中文名称、价格、库存",
        "data": [
            // {
            //     "column": "id",
            //     "description": "药品ID"
            // },
            {
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
        "description": "化验相关内容：宠物ID、基本指标wbc、基本指标rbc、基本指标plt",
        "data": [
            // {
            //     "column": "id",
            //     "description": "化验ID"
            // },
            {
                "column": "patient",
                "description": "宠物ID"
            }, {
                "column": "wbc",
                "description": "基本指标wbc"
            }, {
                "column": "rbc",
                "description": "基本指标rbc"
            }, {
                "column": "plt",
                "description": "基本指标plt"
            }]
    },
    "vaccine": {
        "header": "疫苗管理",
        "description": "疫苗相关内容：中文名称、价格、库存",
        "data": [
            // {
            //     "column": "id",
            //     "description": "疫苗ID"
            // },
            {
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
        "description": "住院相关内容：宠物ID、入院时间、出院时间、状态",
        "data": [
            // {
            //     "column": "id",
            //     "description": "住院单ID"
            // },
            {
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
        "description": "宠物相关内容：宠物名称、备注",
        "data": [
            // {
            //     "column": "id",
            //     "description": "宠物ID"
            // },
            {
                "column": "name",
                "description": "宠物名称"
            }, {
                "column": "description",
                "description": "备注"
            }]
    },
    "case": {
        "header": "病例学习",
        "description": "病例相关内容：病例名称、接诊、病理检查、治疗方案、治疗方案",
        "data": [
            // {
            //     "column": "id",
            //     "description": "病例ID"
            // },
            {
                "column": "name",
                "description": "病例名称"
            }],
        "detail": [{
            "column": "name",
            "description": "病例名称"
        }, {
            "column": "reception",
            "description": "接诊",
            "rich_text": "true",
        }, {
            "column": "inspection",
            "description": "病理检查",
            "rich_text": "true",
        }, {
            "column": "result",
            "description": "诊断结果",
            "rich_text": "true",
        }, {
            "column": "treatment",
            "description": "治疗方案",
            "rich_text": "true",
        }]
    },
}

function update_item(entity, id) {
    var old = document.getElementById(entity + "_" + id);
    var tr = "";
    for (var j = 0; j < description[entity]["data"].length; j++) {
        tr += "<td><input value=\"" + old.children[j].innerHTML + "\">" + "</td>";
    }
    tr += "<td>" + get_a_label('update_by_id', '修改', [entity, id]) + get_a_label('update_item_cancel', '取消', [entity, id]) + "</td>";
    $("#" + entity + "_" + id).html(tr);
}

function add_item(entity) {
    var tr = "<tr>";
    for (var j = 0; j < description[entity]["data"].length; j++) {
        tr += "<td><input required></td>";
    }
    tr += "<td>" + get_a_label('add', '保存', [entity]) + get_a_label('add_item_cancel', '取消', ["tfoot"]) + "</td></tr>";
    $("#tfoot").html(tr);
}

function add_rich_text_item(entity) {
    var tr = "";
    var info = description[entity]["detail"];
    for (var j = 0; j < info.length; j++) {
        tr += info[j]["description"] + "<div id='new_" + info[j]["column"] + "'></div>";
    }
    tr += get_a_label('add_rich_text', '保存', [entity]) + get_a_label('c', '取消', ["add_space"]);
    $("#add_space").html(tr);

    for (var j = 0; j < info.length; j++) {
        if (info[j]["rich_text"] == "true") {
            var E = window.wangEditor
            var editor = new E("#new_" + info[j]["column"]);
            editor.customConfig.uploadImgShowBase64 = true;
            editor.customConfig.showLinkImg = false;
            editor.create();
            add_list[info[j]["column"]] = editor;
        }
        else {
            document.getElementById("new_" + info[j]["column"]).innerHTML += "<input required>";
        }
    }
}

function update_rich_text_item(entity, id) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: base_url + entity + "/" + id,
        xhrFields: {withCredentials: true},
        success: function (result) {
            var tr = "";
            var info = description[entity]["detail"];
            for (var j = 0; j < info.length; j++) {
                tr += info[j]["description"] + "<div id='new_" + info[j]["column"] + "'></div>";
            }
            tr += get_a_label('update_rich_text', '保存', [entity, id]) + get_a_label('add_item_cancel', '取消', ["add_space"]);
            $("#add_space").html(tr);

            for (var i = 0; i < info.length; i++) {
                if (info[i]["rich_text"] == "true") {
                    var E = window.wangEditor
                    var editor = new E("#new_" + info[i]["column"]);
                    editor.customConfig.uploadImgShowBase64 = true;
                    editor.customConfig.showLinkImg = false;
                    editor.create();
                    add_list[info[i]["column"]] = editor;
                    editor.txt.html(result[info[i]['column']]);
                }
                else {
                    document.getElementById("new_" + info[i]["column"]).innerHTML += "<input required value='" + result[info[i]['column']] + "'>";
                }
            }
            console.log(result);
        },
        error: function (error) {
            console.log(error);
            window.location.href = 'error.html';
        }
    });
}

function add_item_cancel(div) {
    $("#" + div).html("");
}

function update_item_cancel(entity, id) {
    var old = document.getElementById(entity + "_" + id);
    var tr = "<tr><td>" + id + "</td>";
    for (var j = 1; j < description[entity]["data"].length; j++) {
        tr += "<td>" + old.children[j].children[0].value + "</td>";
    }
    tr += "<td>" + get_a_label('delete_by_id', '删除', [entity, id]) + get_a_label('update_item', '修改', [entity, id]) + "</td></tr>";
    old.innerHTML = tr;
}

function get_list(entity, add, remove, update, detail) {
    var isOperation = add == null && remove == null && update == null && detail == null ? false : true;
    var add_operation = add == null ? "" : get_a_label(add, '+', [entity]);

    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: "json",
        url: base_url + entity + "/",
        xhrFields: {withCredentials: true},
        success: function (result) {
            var thead = "<tr>";
            var info = description[entity]["data"];
            for (var i = 0; i < info.length; i++) {
                thead += "<th>" + info[i]["description"] + "</th>"
            }
            if (isOperation) {
                thead += "<th>操作 " + add_operation + "</th>";
            }
            thead += "</tr>";
            var tbody = "";

            for (var i = 0; i < result["objects"].length; i++) {
                var id = result["objects"][i]["id"];
                var remove_operation = remove == null ? "" : get_a_label(remove, ' 删除 ', [entity, id]);
                var update_operation = update == null ? "" : get_a_label(update, ' 修改 ', [entity, id]);
                var detail_operation = detail == null ? "" : get_a_label(detail, ' 详情 ', [entity, id]);
                tbody += "<tr id='" + entity + "_" + id + "'>";
                for (var j = 0; j < info.length; j++) {
                    tbody += "<td>" + result["objects"][i][info[j]["column"]] + "</td>";
                }
                if (isOperation) {
                    tbody += "<td>" + remove_operation + update_operation + detail_operation + "</td>";
                }
                tbody += "</tr>";
            }
            $("#thead").html(thead);
            $("#tbody").html(tbody);
            $("#tfoot").html("");
            $("#add_space").html("");
            $("#header").html(description[entity]["header"]);
            $("#description").html(description[entity]["description"]);
        },
        error: function () {
            console.log("error");
            window.location.href = 'error.html';
        }
    });
}

function add(entity) {
    var old = document.getElementById("tfoot").children[0];
    var info = description[entity]["data"];
    var data = {};
    for (var j = 0; j < info.length; j++) {
        data[info[j]['column']] = old.children[j].children[0].value;
    }
    $.ajax({
        type: "POST",
        dataType: "json",
        contentType: 'application/json',
        url: base_url + entity + "/",
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify(data),
        success: function () {
            get_list(entity, "add_item", "delete_by_id", "update_item");
        },
        error: function () {
            console.log("error");
            window.location.href = 'error.html';
        }
    });
}

function add_rich_text(entity) {
    var info = description[entity]["detail"];
    var data = {};
    for (var j = 0; j < info.length; j++) {
        data[info[j]['column']] = info[j]["rich_text"] == "true" ? add_list[info[j]["column"]].txt.html() : document.getElementById("add_space").children[j].children[0].value;
    }
    $.ajax({
        type: "POST",
        dataType: "json",
        contentType: 'application/json',
        url: base_url + entity + "/",
        xhrFields: {withCredentials: true},
        data: JSON.stringify(data),
        success: function () {
            get_list(entity, 'add_rich_text_item', 'delete_by_id', 'update_item', 'get_by_id');
        },
        error: function (error) {
            console.log(error);
            window.location.href = 'error.html';
        }
    });
}

function update_rich_text(entity, id) {
    var info = description[entity]["detail"];
    var data = {};
    for (var j = 0; j < info.length; j++) {
        data[info[j]['column']] = info[j]["rich_text"] == "true" ? add_list[info[j]["column"]].txt.html() : document.getElementById("add_space").children[j].children[0].value;
    }
    $.ajax({
        type: "PUT",
        dataType: "json",
        contentType: 'application/json',
        url: base_url + entity + "/" + id,
        xhrFields: {withCredentials: true},
        data: JSON.stringify(data),
        success: function () {
            get_list(entity, 'add_rich_text_item', 'delete_by_id', 'update_rich_text_item', 'get_by_id');
            add_item_cancel("add_space");
        },
        error: function (error) {
            console.log(error);
            window.location.href = 'error.html';
        }
    });
}

function get_by_id(entity, id) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: base_url + entity + "/" + id,
        xhrFields: {withCredentials: true},
        success: function (result) {
            var info = description[entity]["detail"];
            var add_space = "";
            for (var i = 0; i < info.length; i++) {
                add_space += "<div id='add_space_" + info[i] + "'>" + result[info[i]['column']] + "</div>";
            }
            add_space += get_a_label('add_item_cancel', '收起', ["add_space"]);
            $("#add_space").html(add_space);
            console.log(result);
        },
        error: function (error) {
            console.log(error);
            window.location.href = 'error.html';
        }
    });
}

function delete_by_id(entity, id) {
    $.ajax({
        type: "DELETE",
        dataType: "json",
        url: base_url + entity + "/" + id,
        xhrFields: {withCredentials: true},
        success: function () {
            document.getElementById(entity + "_" + id).remove();
            add_item_cancel("add_space");
        },
        error: function (error) {
            console.log(error);
            window.location.href = 'error.html';
        }
    });
}

function update_by_id(entity, id) {
    var info = description[entity]["data"];
    var data = {};
    var tr = "";
    for (var j = 0; j < info.length; j++) {
        var old_value = document.getElementById(entity + "_" + id).children[j].children[0].value;
        tr += "<td>" + old_value + "</td>";
        data[info[j]["column"]] = old_value;
    }
    tr += "<td>" + get_a_label('delete_by_id', '删除', [entity, id]) + get_a_label('update_item', '修改', [entity, id]) + "</td>";

    $.ajax({
        type: "PUT",
        dataType: "json",
        contentType: 'application/json',
        url: base_url + entity + "/" + id,
        data: JSON.stringify(data),
        xhrFields: {withCredentials: true},
        success: function () {
            $("#" + entity + "_" + id).html(tr);
        },
        error: function (error) {
            console.log(error);
            window.location.href = 'error.html';
        }
    });
}

function get_a_label(func, value, args) {
    if (!func) return "";
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
