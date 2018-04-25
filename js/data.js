var base_url = "https://phls.herokuapp.com/api/";
var add_list = new Array();
var token = "";
var sub_list = {};
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
                "column": "username",
                "description": "用户名称",
                "is_search": "true",
            }, {
                "column": "email", //TMP
                "description": "Email"
            }, {
                "column": "join_date", //TMP
                "description": "加入日期"
            }]
    },
    "department": {
        "header": "科室信息",
        "description": "科室相关内容：科室名称、描述",
        "data": [
            // {
            //     "column": "id",
            //     "description": "科室ID"
            // },
            {
                "column": "name",
                "description": "科室名称",
                "is_search": "true",
            }, {
                "column": "description", //TMP
                "description": "描述",
            }]
    },
    "medicine": {
        "header": "药品信息",
        "description": "药品相关内容：中文名称、价格、库存",
        "data": [
            // {
            //     "column": "id",
            //     "description": "药品ID"
            // },
            {
                "column": "name",
                "description": "中文名称",
                "is_search": "true",
            }, {
                "column": "price", //TMP
                "description": "价格"
            }, {
                "column": "count",
                "description": "库存"
            }]
    },
    "assay": {
        "header": "化验信息",
        "description": "化验相关内容：宠物ID、基本指标wbc、基本指标rbc、基本指标plt",
        "data": [
            // {
            //     "column": "id",
            //     "description": "化验ID"
            // },
            {
                "column": "patient",
                "description": "宠物",
                "object_column": "name",
            }, {
                "column": "wbc",
                "description": "白细胞"
            }, {
                "column": "rbc",
                "description": "红细胞"
            }, {
                "column": "plt",
                "description": "血小板计数"
            }]
    },
    "vaccine": {
        "header": "疫苗信息",
        "description": "疫苗相关内容：中文名称、价格、库存",
        "data": [
            // {
            //     "column": "id",
            //     "description": "疫苗ID"
            // },
            {
                "column": "name",
                "description": "中文名称",
                "is_search": "true",
            }, {
                "column": "price", //TMP
                "description": "价格"
            }, {
                "column": "count",
                "description": "库存"
            }]
    },
    "inhospital": {
        "header": "住院信息",
        "description": "住院相关内容：宠物ID、入院时间、出院时间、状态",
        "data": [
            // {
            //     "column": "id",
            //     "description": "住院单ID"
            // },
            {
                "column": "patient",
                "description": "宠物",
                "object_column": "name",
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
        "header": "宠物信息",
        "description": "宠物相关内容：宠物名称、备注",
        "data": [
            // {
            //     "column": "id",
            //     "description": "宠物ID"
            // },
            {
                "column": "name",
                "description": "宠物名称",
                "is_search": "true",
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
                "description": "病例名称",
                "is_search": "true",
            }],
        "detail": [{
            "column": "name",
            "description": "病例名称",
            "is_search": "true",
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
    "role": {
        "header": "角色扮演",
        "description": "角色扮演相关内容：角色名称、描述",
        "data": [
            // {
            //     "column": "id",
            //     "description": "角色ID"
            // },
            {
                "column": "name",
                "description": "角色名称",
                "is_search": "true",
            }],
        "detail": [{
            "column": "name",
            "description": "角色名称",
            "is_search": "true",
        }, {
            "column": "description",
            "description": "描述",
            "rich_text": "true",
        }]
    },
    "choice": {
        "header": "试题信息",
        "description": "试题相关内容：病种、题目、a选项、b选项、c选项、d选项、正确答案",
        "data": [
            {
                "column": "id",
                "description": "试题ID"
            },
            {
                "column": "case_type",
                "description": "病种",
                "object_column": "name",
            }, {
                "column": "description",
                "description": "题目",
                "is_search": "true",
            }, {
                "column": "choice_a",
                "description": "a选项"
            }, {
                "column": "choice_b",
                "description": "b选项"
            }, {
                "column": "choice_c",
                "description": "c选项"
            }, {
                "column": "choice_d",
                "description": "d选项"
            }, {
                "column": "answer",
                "description": "正确答案",
                // "map": {
                //     "0": "A",
                //     "1": "B",
                //     "2": "C",
                //     "3": "D",
                //     "4": "E"
                // }
            }],
    },
    "testpaper": {
        "header": "试卷信息",
        "description": "试卷相关内容：试卷名称",
        "data": [
            {
                "column": "name",
                "description": "试卷名称",
                "is_search": "true"
            }],
        "detail": [
            {
                "column": "id",
                "description": "试题ID",
            }, {
                "column": "case_type",
                "description": "病种",
                "object_column": "name",
            }, {
                "column": "description",
                "description": "题目",
                "is_search": "true",
            }, {
                "column": "choice_a",
                "description": "a选项"
            }, {
                "column": "choice_b",
                "description": "b选项"
            }, {
                "column": "choice_c",
                "description": "c选项"
            }, {
                "column": "choice_d",
                "description": "d选项"
            }, {
                "column": "answer",
                "description": "正确答案",
                "map": {
                    "0": "A",
                    "1": "B",
                    "2": "C",
                    "3": "D",
                    "4": "E"
                }
            }],
        "detail_column": "choices",
        "detail_source": "testpaper",
        "detail_operation": "true",
    },
    "exam": {
        "header": "考试信息",
        "description": "考试相关内容：考试名称、考试时长、考试时间",
        "data": [
            // {
            //     "column": "id",
            //     "description": "住院单ID"
            // },
            {
                "column": "test_paper",
                "description": "试卷",
                "object_column": "name",
            }, {
                "column": "name",
                "description": "考试名称",
                "is_search": "true",
            }, {
                "column": "duration",
                "description": "考试时长"
            }, {
                "column": "start",
                "description": "考试时间",
                "type": "date"
            }],
        "detail_column": "report",
        "detail_query": "/?exam=",
        "detail_source": "report",
    },
    "exam/my": {
        "header": "考试信息",
        "description": "考试相关内容：考试名称、考试时长、考试时间",
        "data": [
            // {
            //     "column": "id",
            //     "description": "住院单ID"
            // },
            {
                "column": "test_paper",
                "description": "试卷",
                "object_column": "name",
            }, {
                "column": "name",
                "description": "考试名称",
                "is_search": "true",
            }, {
                "column": "duration",
                "description": "考试时长"
            }, {
                "column": "start",
                "description": "考试时间"
            }],
        "detail_query": "?eid=",
    },
    "report": {
        "header": "成绩信息",
        "description": "成绩相关内容：考生姓名、考试、成绩",
        "data": [],
        "detail": [{
            "column": "user",
            "description": "考生姓名",
            "object_column": "username",
        }, {
            "column": "exam",
            "description": "考试",
            "object_column": "name",
        }, {
            "column": "score",
            "description": "成绩"
        }],
        "detail_column": "objects",
        "detail_operation": "false",
    },
    "report/my": {
        "data": [
            {
                "column": "exam",
                "description": "考试",
                "object_column": "name",
            }, {
                "column": "score",
                "description": "考试分数",
            }],
    },
    "unity": {
        "header": "3D医院导览",
        "description": "使用虚拟场景带你领略医院全貌",
    },
    "init": {
        "header": "虚拟宠物医院后台管理系统",
        "description": "后台数据管理 模块包括人员管理、基本结构与功能管理、职能学习管理、病例管理、测试管理",
    },
    "default": {
        "add": "table_add_item",
        "remove": "table_delete_item",
        "update": "table_update_item",
        "detail": "editor_detail"
    }
}
var function_name = {
    "table_add": " | 保存 | ",
    "table_add_item": " | 添加 | ",
    "table_delete_item": " | 删除 | ",
    "table_update": " | 保存 | ",
    "table_update_item": " | 修改 | ",
    "table_update_cancel": " | 取消 | ",
    "editor_add": " | 保存 | ",
    "editor_add_item": " | 添加 | ",
    "editor_update": " | 保存 | ",
    "editor_update_item": " | 修改 | ",
    "editor_detail": " | 详情 | ",
    "subTable_add": " | 保存 | ",
    "subTable_add_item": " | 添加 | ",
    "subTable_list": " | 详情 | ",
    "subTable_delete": " | 删除 | ",
    "exam_start": " | 参加考试 | ",
    "exam_score_list": " | 查看成绩 | ",
    "exam_submit": " | 提交 | ",
    "remove_label": " | 取消 | ",
}


/*------------------------START 初始化相关操作------------------------*/
function get_user_info(source) {
    $("#loading_img").show();
    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: "json",
        url: base_url + "user/me",
        xhrFields: {withCredentials: true},
        success: function (result) {
            $("#loading_img").hide();
            if (result["username"] != "admin" && source == "index") {
                alert("您没有管理员权限");
                window.location.href = 'study.html';
            } else {
                $(".username_p").html(result["username"]);
            }
        },
        error: function () {
            $("#loading_img").hide();
            window.location.href = 'login.html';
        }
    });
}

function enter_index() {
    $("#loading_img").show();
    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: "json",
        url: base_url + "user/me",
        xhrFields: {withCredentials: true},
        success: function (result) {
            $("#loading_img").hide();
            if (result["username"] != "admin") {
                alert("您没有管理员权限");
            } else {
                window.location.href = 'index.html';
            }
        },
        error: function () {
            $("#loading_img").hide();
            window.location.href = 'login.html';
        }
    });
}

var gameInstance;
var gameInit = false;

function load_hospital_guide() {
    if ($("#gameContainer").length > 0) {
        $("#table").show();
        $("#unity").show();
        ShowUnity();
    } else {
        $("#unity").html("<div id=\"gameContainer\" style=\"width: 960px; height: 600px;\"></div>");
        gameInstance = UnityLoader.instantiate("gameContainer"
            , "https://3dhospital-1251780400.cos.ap-shanghai.myqcloud.com/3DHospital/Build/game.json", {
                onProgress: UnityProgress,
                Module: {
                    TOTAL_MEMORY: 268435456,
                    onRuntimeInitialized: OnUnityFinished,
                },
            });
    }
    $("#thead").html("");
    $("#tbody").html("");
    $("#tfoot").html("");
    $("#header").html(description["unity"]["header"]);
    $("#description").html(description["unity"]["description"]);
}

function OnUnityFinished() {
    gameInit = true;
}

function ShowUnity() {
    if (gameInit && gameInstance != null) {
        gameInstance.SendMessage('Controller', 'SetEnable');
    }
}

function HideUnity() {
    if (gameInit && gameInstance != null) {
        gameInstance.SendMessage('Controller', 'SetDisable');
    }
}

function init(source) {
    get_user_info(source);
    $("#loading_img").show();
    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: "json",
        url: base_url + "casetype/?",
        xhrFields: {withCredentials: true},
        success: function (result) {
            $("#loading_img").hide();
            var tr = "";
            for (var i = 0; i < result["objects"].length; i++) {
                tr += "<li><a href=\"#\" onclick=\"table_list('choice','table_add_item', 'table_delete_item', 'table_update_item',null,'case_type=" + result["objects"][i]["id"] + "')\">" + result["objects"][i]["name"] + "</a></li>";
            }
            $("#choice_manage").html(tr);
        },
        error: function () {
            $("#loading_img").hide();
        }
    });
    $("#search_div").hide();
    $("#table").hide();
    HideUnity();
    $("#sub_table").hide();
    $("#thead").html("");
    $("#tbody").html("");
    $("#tfoot").html("");
    $("#header").html(description["init"]["header"]);
    $("#description").html(description["init"]["description"]);
}


/*------------------------START 对主表格的增删改查操作------------------------*/
function table_add_item(entity, add, remove, update, detail, search) {
    var tr = "<tr><td></td>";
    for (var j = 0; j < description[entity]["data"].length; j++) {
        if (description[entity]["data"][j]["column"] == "id") {
            tr += "<td></td>";
        } else if (description[entity]["data"][j]["type"] == "date") {
            tr += "<td><input type='text' id='laydate_input'></td>";
        } else {
            tr += "<td><input required class='table_add_td_input'></td>";
        }
    }
    tr += "<td>" + get_a_label('table_add', [entity, add, remove, update, detail, search]) + get_a_label('remove_label', ["tfoot"]) + "</td></tr>";
    $("#tfoot").html(tr);
    init_laydate();
}

function table_update_item(entity, id) {
    var old = document.getElementById(entity + "_" + id);
    var tr = "<td>" + old.children[0].innerHTML + "</td>";
    for (var j = 0; j < description[entity]["data"].length; j++) {
        if (description[entity]["data"][j]["object_column"] == null) {
            if (description[entity]["data"][j]["column"] == "id") {
                tr += "<td>" + old.children[0].innerHTML + "</td>";
            } else {
                tr += "<td><input value=\"" + old.children[j + 1].innerHTML + "\">" + "</td>";
            }
        } else {
            tr += "<td>" + old.children[j + 1].innerHTML + "</td>";
        }
    }
    tr += "<td>" + get_a_label('table_update', [entity, id]) + get_a_label('table_update_cancel', [entity, id]) + "</td>";
    $("#" + entity + "_" + id).html(tr);
}

function table_delete_item(entity, id, add, remove, update, detail, search) {
    $("#loading_img").show();
    $.ajax({
        type: "DELETE",
        dataType: "json",
        url: base_url + entity + "/" + id,
        xhrFields: {withCredentials: true},
        success: function () {
            $("#loading_img").hide();
            table_list(entity, add, remove, update, detail, search);
        },
        error: function (error) {
            $("#loading_img").hide();
        }
    });
}

function table_add(entity, add, remove, update, detail, search) {
    $("#loading_img").show();
    var old = document.getElementById("tfoot").children[0];
    var info = description[entity]["data"];
    var data = {};
    for (var j = 0; j < info.length; j++) {
        if (info[j]['column'] != "id") {
            data[info[j]['column']] = old.children[j + 1].children[0].value;
        }
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
            $("#loading_img").hide();
            table_list(entity, add, remove, update, detail, search);
        },
        error: function () {
            $("#loading_img").hide();
            alert("请输入正确的数据格式");
        }
    });
}

function table_update(entity, id) {
    $("#loading_img").show();
    var info = description[entity]["data"];
    var old = document.getElementById(entity + "_" + id);
    var data = {};
    var tr = "<td>" + old.children[0].innerHTML + "</td>";
    for (var j = 0; j < info.length; j++) {
        var old_value;
        if (info[j]["object_column"] == null && info[j]["column"] != "id") {
            old_value = old.children[j + 1].children[0].value;
            data[info[j]["column"]] = old_value;
        } else {
            old_value = old.children[j + 1].innerHTML;
            // data[info[j]["object_column"]] = old_value;
        }
        tr += "<td>" + old_value + "</td>";
    }
    tr += "<td>" + get_a_label('table_delete_item', [entity, id]) + get_a_label('table_update_item', [entity, id]) + "</td>";

    $.ajax({
        type: "PUT",
        dataType: "json",
        contentType: 'application/json',
        url: base_url + entity + "/" + id,
        data: JSON.stringify(data),
        xhrFields: {withCredentials: true},
        success: function () {
            $("#loading_img").hide();
            $("#" + entity + "_" + id).html(tr);
        },
        error: function (error) {
            $("#loading_img").hide();
            alert("请输入正确的数据格式");
        }
    });
}

function table_update_cancel(entity, id) {
    var old = document.getElementById(entity + "_" + id);
    var tr = "<tr><td>" + old.children[0].innerHTML + "</td>";
    for (var j = 0; j < description[entity]["data"].length; j++) {
        if (description[entity]["data"][j]["object_column"] == null
            && description[entity]["data"][j]["column"] != "id") {
            tr += "<td>" + old.children[j + 1].children[0].value + "</td>";
        } else {
            tr += "<td>" + old.children[j + 1].innerHTML + "</td>";
        }
    }
    tr += "<td>" + get_a_label('table_delete_item', [entity, id]) + get_a_label('table_update_item', [entity, id]) + "</td></tr>";
    old.innerHTML = tr;
}

function table_search(entity, add, remove, update, detail) {
    var info = description[entity]["detail"] == null ? description[entity]["data"] : description[entity]["detail"];
    var query = "/";
    for (var i = 0; i < info.length; i++) {
        if (info[i]["is_search"] != null && info[i]["is_search"] == "true") {
            query += info[i]["column"] + "__like=%" + $("#search_input").val() + "%&";
        }
    }
    query += "result__like=%" + $("#search_input").val() + "%";
    table_list(entity, add, remove, update, detail, query);
}

function table_list(entity, add, remove, update, detail, search, page) {
    $("#loading_img").show();
    var limit = 10;
    add = add == "undefined" ? null : add;
    remove = remove == "undefined" ? null : remove;
    update = update == "undefined" ? null : update;
    detail = detail == "undefined" ? null : detail;
    search = search == "undefined" ? null : search;
    var isOperation = add == null && remove == null && update == null && detail == null ? false : true;
    var add_operation = add == null ? "" : get_a_label(add, [entity, add, remove, update, detail, search]);
    var query = search == null ? "" : "?" + search;
    var page_query = search == null ? "?limit=" + limit + "&" : "&limit=" + limit + "&";
    page_query += page == null ? "page=1" : "page=" + page;
    page = page == null ? 1 : page;
    $("#search_button").attr('onclick', 'table_search(\'' + entity + '\',\'' + add + '\',\'' + remove + '\',\'' + update + '\',\'' + detail + '\');');
    if (search == null) {
        $("#search_input").val("");
    }
    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: "json",
        url: base_url + entity + query + page_query,
        xhrFields: {withCredentials: true},
        success: function (result) {
            $("#loading_img").hide();
            var thead = "<tr><th class='index_th'>序号</th>";
            var info = description[entity]["data"];
            var tfoot = "<tr>";
            for (var i = 0; i < info.length; i++) {
                thead += "<th>" + info[i]["description"] + "</th>";
                tfoot += "<td></td>";
            }
            if (isOperation) {
                thead += "<th class='operation_th'>操作 " + add_operation + "</th>";
                tfoot += "<td></td>";
            }
            tfoot += "<td>";
            thead += "</tr>";
            var tbody = "";

            for (var i = 0; i < result["objects"].length; i++) {
                var id = result["objects"][i]["id"];
                var detail_source = description[entity]["detail_source"] == null ? entity : description[entity]["detail_source"];
                var detail_query = description[entity]["detail_query"] == null ? "/" : description[entity]["detail_query"];
                var remove_operation = remove == null ? "" : get_a_label(remove, [entity, id, add, remove, update, detail, search]);
                var update_operation = update == null ? "" : get_a_label(update, [entity, id]);
                var detail_operation = detail == null ? "" : get_a_label(detail, [detail_source, detail_query + id]);
                tbody += "<tr id='" + entity + "_" + id + "'><td>" + ((page - 1) * limit + (i + 1)) + "</td>";
                for (var j = 0; j < info.length; j++) {
                    if (info[j]["object_column"] != null) {
                        tbody += "<td id='" + result["objects"][i][info[j]["column"]]["id"] + "'>" + result["objects"][i][info[j]["column"]][info[j]["object_column"]] + "</td>";
                    } else {
                        if (info[j]["map"] != null) {
                            tbody += "<td>" + info[j]["map"][result["objects"][i][info[j]["column"]]] + "</td>";
                        } else {
                            tbody += "<td>" + result["objects"][i][info[j]["column"]] + "</td>";
                        }
                    }
                }
                if (isOperation) {
                    tbody += "<td>" + remove_operation + update_operation + detail_operation + "</td>";
                }
                tbody += "</tr>";
            }
            if (result["meta"]["previous"] != "") {
                tfoot += get_a_label("table_list", [entity, add, remove, update, detail, search, parseInt(page) - 1], " |上一页| ")
            }
            if (result["meta"]["next"] != "") {
                tfoot += get_a_label("table_list", [entity, add, remove, update, detail, search, parseInt(page) + 1], " |下一页| ")
            }
            tfoot += "</td></tr>";
            $("#thead").html(thead);
            $("#tbody").html(tbody);
            $("#tfoot").html(tfoot);
            $("#add_space").html("");
            $("#table").show();
            $("#search_div").show();
            $("#unity").hide();
            HideUnity();
            $("#sub_table").hide();
            $("#header").html(description[entity]["header"]);
            $("#description").html(description[entity]["description"]);
        },
        error: function () {
            $("#loading_img").hide();
        }
    });
}


/*------------------------START 对富文本框的增删改查操作------------------------*/
function editor_add_item(entity) {
    var tr = "";
    var info = description[entity]["detail"];
    for (var j = 0; j < info.length; j++) {
        tr += info[j]["description"] + "<div id='new_" + info[j]["column"] + "'></div>";
    }
    tr += get_a_label('editor_add', [entity]) + get_a_label('remove_label', ["add_space"]);
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

function editor_update_item(entity, id) {
    $("#loading_img").show();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: base_url + entity + "/" + id,
        xhrFields: {withCredentials: true},
        success: function (result) {
            $("#loading_img").hide();
            var tr = "";
            var info = description[entity]["detail"];
            for (var j = 0; j < info.length; j++) {
                tr += info[j]["description"] + "<div id='new_" + info[j]["column"] + "'></div>";
            }
            tr += get_a_label('editor_update', [entity, id]) + get_a_label('remove_label', ["add_space"]);
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
            $("#loading_img").hide();
        }
    });
}

function editor_detail(entity, query) {
    $("#loading_img").show();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: base_url + entity + query,
        xhrFields: {withCredentials: true},
        success: function (result) {
            $("#loading_img").hide();
            var info = description[entity]["detail"];
            var add_space = "";
            for (var i = 0; i < info.length; i++) {
                add_space += "<div id='add_space_" + info[i] + "'>" + result[info[i]['column']] + "</div>";
            }
            add_space += get_a_label('remove_label', ["add_space"]);
            $("#add_space").html(add_space);
        },
        error: function () {
            $("#loading_img").hide();
        }
    });
}

function editor_add(entity) {
    $("#loading_img").show();
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
            $("#loading_img").hide();
            table_list(entity, 'editor_add_item', 'table_delete_item', 'table_update_item', 'editor_detail');
        },
        error: function (error) {
            $("#loading_img").hide();
        }
    });
}

function editor_update(entity, id) {
    $("#loading_img").show();
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
            $("#loading_img").hide();
            table_list(entity, 'editor_add_item', 'table_delete_item', 'editor_update_item', 'editor_detail');
            remove_label("add_space");
        },
        error: function (error) {
            $("#loading_img").hide();
        }
    });
}


/*------------------------START 对子表格的增删改查操作------------------------*/
function subTable_list(entity, query) {
    $("#loading_img").show();
    sub_list = new Array();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: base_url + entity + query,
        xhrFields: {withCredentials: true},
        success: function (result) {
            $("#loading_img").hide();
            var info = description[entity]["detail"];

            var sub_head = "<tr><th class='index_th'>序号</th>";
            for (var i = 0; i < info.length; i++) {
                sub_head += "<th>" + info[i]["description"] + "</th>"
            }
            if (description[entity]["detail_operation"] == "true") {
                sub_head += "<th class='operation_th'>操作 " + get_a_label("subTable_add_item", [entity, result["id"]]) + "</th>";
            }
            sub_head += "</tr>";
            var sub_body = "";
            for (var i = 0; i < result[description[entity]["detail_column"]].length; i++) {
                var detail_column = description[entity]["detail_column"];
                var id = result[detail_column][i]["id"];
                sub_list.push(id);
                sub_body += "<tr id='" + entity + "_" + result["id"] + "_" + detail_column + "_" + id + "'><td>" + (i + 1) + "</td>";
                for (var j = 0; j < info.length; j++) {
                    if (info[j]["object_column"] != null) {
                        sub_body += "<td>" + result[detail_column][i][info[j]["column"]][info[j]["object_column"]] + "</td>";
                    } else {
                        if (info[j]["map"] != null) {
                            sub_body += "<td>" + info[j]["map"][result[detail_column][i][info[j]["column"]]] + "</td>";
                        } else {
                            sub_body += "<td>" + result[detail_column][i][info[j]["column"]] + "</td>";
                        }
                    }
                }
                if (description[entity]["detail_operation"] == "true") {
                    sub_body += "<td>" + get_a_label("subTable_delete", [entity, result["id"], description[entity]["detail_column"], id]) + "</td>";
                }
                sub_body += "</tr>";
            }

            $("#sub_tfoot").html("");
            $("#sub_thead").html(sub_head);
            $("#sub_tbody").html(sub_body);
            $("#sub_table").show();
        },
        error: function () {
            $("#loading_img").hide();
        }
    });
}

function subTable_add_item(entity, id) {
    var tr = "<tr><td></td>";
    for (var j = 0; j < description[entity]["detail"].length; j++) {
        if (description[entity]["detail"][j]["column"] == "id") {
            tr += "<td><input required id='sub_add_input'></td>";
        } else {
            tr += "<td></td>";
        }
    }
    tr += "<td>" + get_a_label('subTable_add', [entity, id, description[entity]["detail_column"]]) + get_a_label('remove_label', ["sub_tfoot"]) + "</td></tr>";
    $("#sub_tfoot").html(tr);
}

function subTable_add(entity, id, sub_entity) {
    $("#loading_img").show();
    if (sub_list.indexOf(parseInt($("#sub_add_input").val())) == -1) {
        sub_list.push(parseInt($("#sub_add_input").val()));
    }
    console.log(JSON.stringify(sub_list));
    console.log(sub_list);
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: base_url + entity + "/" + id + "/" + sub_entity,
        contentType: 'application/json',
        data: JSON.stringify(sub_list),
        xhrFields: {withCredentials: true},
        success: function () {
            $("#loading_img").hide();
            subTable_list(entity, "/" + id);
        },
        error: function () {
            $("#loading_img").hide();
            alert("请输入正确的试题ID");
            subTable_list(entity, "/" + id);
        }
    });
}

function subTable_delete(entity, id, sub_entity, sub_id) {
    $("#loading_img").show();
    var index = sub_list.indexOf(parseInt(sub_id));
    if (index > -1) {
        sub_list.splice(index, 1);
    }
    console.log(sub_list);
    $.ajax({
        type: "PUT",
        dataType: "json",
        contentType: 'application/json',
        url: base_url + entity + "/" + id + "/" + sub_entity,
        data: JSON.stringify(sub_list),
        xhrFields: {withCredentials: true},
        success: function () {
            $("#loading_img").hide();
            subTable_list(entity, "/" + id);
        },
        error: function () {
            $("#loading_img").hide();
        }
    });
}


/*------------------------START 考试相关操作------------------------*/
function exam_start(_, id) {
    $("#loading_img").show();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: base_url + "exam/begin" + id,
        xhrFields: {withCredentials: true},
        success: function (result) {
            $("#loading_img").hide();
            if (result["status"] != null) {
                alert(result["status"]);
                return;
            }
            var parent = document.getElementById("exam/my_" + 1);
            var start_time = new Date(Date.parse(parent.children[4].innerHTML.replace(/-/g, "/")));
            var end_time = new Date(Date.parse(parent.children[4].innerHTML.replace(/-/g, "/")));
            var duration = parseInt(parent.children[3].innerHTML);
            end_time.setMinutes(end_time.getMinutes() + duration, end_time.getSeconds(), 0);
            var now = new Date();
            if (now < end_time) {
                if (now < start_time) {
                    alert("考试未开始");
                } else {
                    token = result["token"];
                    var test_paper = "";
                    test_paper += "<div id='sizer'><h1>" + parent.children[2].innerHTML + "</h1>";
                    test_paper += "<h3>" + "试卷：" + parent.children[1].innerHTML + " 考试时长：" + duration + "分钟" + "</h3>";
                    for (var i = 0; i < result["problem"].length; i++) {
                        var choices = result["problem"][i];
                        test_paper += "<div><h4>" + (i + 1) + ". " + choices["description"] + "()</h4>";
                        test_paper += "<fieldset class=\"radios has-js\">";
                        test_paper += "<label class=\"label_radio\" for=\"choice_" + (i + 1) + "_0" + "\"><input id=\"choice_" + (i + 1) + "_0" + "\" type=\"radio\" value=\"0\" name=\"choice_" + (i + 1) + "\"checked/>" + choices["choice_a"] + "</label>";
                        test_paper += "<label class=\"label_radio\" for=\"choice_" + (i + 1) + "_1" + "\"><input id=\"choice_" + (i + 1) + "_1" + "\" type=\"radio\" value=\"0\" name=\"choice_" + (i + 1) + "\"/>" + choices["choice_b"] + "</label>";
                        test_paper += "<label class=\"label_radio\" for=\"choice_" + (i + 1) + "_2" + "\"><input id=\"choice_" + (i + 1) + "_2" + "\" type=\"radio\" value=\"0\" name=\"choice_" + (i + 1) + "\"/>" + choices["choice_c"] + "</label>";
                        test_paper += "<label class=\"label_radio\" for=\"choice_" + (i + 1) + "_3" + "\"><input id=\"choice_" + (i + 1) + "_3" + "\" type=\"radio\" value=\"0\" name=\"choice_" + (i + 1) + "\"/>" + choices["choice_d"] + "</label>";
                        test_paper += "</fieldset></div>";
                    }
                    test_paper += get_a_label('exam_submit', [id, end_time]);
                    test_paper += get_a_label('remove_label', ["add_space"]);
                    test_paper += "</div>"
                    $("#add_space").html(test_paper);
                    $('.label_radio').bind("click", function () {
                        setupLabel();
                    });
                    setupLabel();
                }
            }
            else {
                alert("考试已经结束");
            }
        }
        ,
        error: function () {
            $("#loading_img").hide();
        }
    });
}

function exam_submit(id, end_time) {
    var now = new Date();
    if (now > end_time) {
        alert("考试已结束。");
        remove_label("add_space");
        return;
    }
    var answer = new Array();
    $('.label_radio input:checked').each(function () {
        var id = $(this).attr('id');
        var split_result = id.split("_");
        answer.push(parseInt(split_result[2]));
    });
    console.log(answer);
    var data = {
        "token": token,
        "eid": id,
        "answers": answer
    };
    $("#loading_img").show();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: base_url + "exam/submit",
        contentType: 'application/json',
        data: JSON.stringify(data),
        xhrFields: {withCredentials: true},
        success: function (result) {
            $("#loading_img").hide();
            alert("提交成功，您的得分是：" + result["score"] + "分");
        },
        error: function () {
            $("#loading_img").hide();
        }
    });
}

function exam_score_list(entity, query) {
    subTable_list(entity, query);
}

/*------------------------START 其他对HTML标签的操作------------------------*/

function remove_label(div) {
    $("#" + div).html("");
}

function get_a_label(func, args, value) {
    if (!func) return "";
    var a = "<a style='cursor: pointer' onclick=\"" + func + "(";
    for (var i = 0; i < args.length; i++) {
        if (args[i] != null) {
            a += "'" + args[i] + "'";
        } else {
            a += null;
        }
        if (i < args.length - 1) {
            a += ",";
        }
    }
    var func_name = value == null ? function_name[func] : value;
    a += ")\">" + func_name + "</a>";
    return a;
}

function setupLabel() {
    if ($('.label_radio input').length) {
        $('.label_radio').each(function () {
            $(this).removeClass('r_on');
        });
        $('.label_radio input:checked').each(function () {
            $(this).parent('label').addClass('r_on');
        });
    }
}

function init_laydate(){
    //时间选择器
    laydate.render({
        elem: '#laydate_input'
        ,type: 'datetime'
    });
}

