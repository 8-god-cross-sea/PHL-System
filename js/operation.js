var base_url = "https://phls.herokuapp.com/api/";
var data = {
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
            "description": "用户密码"
        }, {
            "column": "operaion",
            "description": "操作"
        }]
    },
    "department": {
        "header": "科室管理",
        "description": "用于管理科室相关内容",
        "data": [{
            "column": "id",
            "description": "科室ID"
        }, {
            "column": "uername",
            "description": "科室名称"
        }, {
            "column": "email", //TMP
            "description": "描述"
        }, {
            "column": "operaion",
            "description": "主要负责人"
        }]
    },
    "staff": {
        "header": "人员管理",
        "description": "用于管理人员相关内容",
        "data": [{
            "column": "id",
            "description": "人员名称"
        }, {
            "column": "uername",
            "description": "职位"
        }]
    },
    "medicine": {
        "header": "药品管理",
        "description": "用于管理药品相关内容",
        "data": [{
            "column": "id",
            "description": "中文名称"
        }, {
            "column": "uername",
            "description": "英文名称"
        }, {
            "column": "email", //TMP
            "description": "价格"
        }, {
            "column": "operaion",
            "description": "库存"
        }]
    },
    "assay": {
        "header": "化验管理",
        "description": "用于管理化验相关内容",
        "data": [{
            "column": "id",
            "description": "宠物ID"
        }, {
            "column": "uername",
            "description": "基本指标"
        }]
    },
    "vaccine": {
        "header": "疫苗管理",
        "description": "用于管理疫苗相关内容",
        "data": [{
            "column": "id",
            "description": "中文名称"
        }, {
            "column": "uername",
            "description": "英文名称"
        }, {
            "column": "email", //TMP
            "description": "价格"
        }, {
            "column": "operaion",
            "description": "库存"
        }]
    },
    "inhospital": {
        "header": "住院管理",
        "description": "用于管理住院相关内容",
        "data": [{
            "column": "id",
            "description": "宠物ID"
        }, {
            "column": "uername",
            "description": "入院时间"
        }, {
            "column": "email", //TMP
            "description": "状态"
        }, {
            "column": "operaion",
            "description": "出院时间"
        }]
    },
    "patient": {
        "header": "宠物管理",
        "description": "用于管理宠物相关内容",
        "data": [{
            "column": "id",
            "description": "宠物名称"
        }, {
            "column": "uername",
            "description": "描述"
        }]
    },
}

function initial_table(entity) {
    document.getElementById("header").innerHTML = data[entity]["header"];
    document.getElementById("description").innerHTML = data[entity]["description"];
    var thead = "<tr>";
    for (var i = 0; i < data[entity]["data"].length; i++) {
        thead += "<th>" + data[entity]["data"][i]["description"] + "</th>"
    }
    thead += "</tr>";
    document.getElementById("thead").innerHTML = thead;
    get_list(entity);
}

function get_list(entity) {
    var simulation_data = [
        { "id": "1", "uername": "admin", "email": "password" },
        { "id": "2", "uername": "admin2", "email": "password2" },
        { "id": "3", "uername": "admin3", "email": "password3" }
    ]
    var tbody ="";
    for (var i = 0; i < simulation_data.length; i++) {
        tbody+="<tr>";
        for (var j = 0; j< data[entity]["data"].length; j++) {
        	tbody+="<td>"+simulation_data[i][data[entity]["data"][j]["column"]]+"</td>";
        }
        tbody+="</tr>";
    }
    document.getElementById("tbody").innerHTML = tbody;

    // $.ajax({
    //     type: "GET",
    //     dataType: "json",
    //     url: base_url + entity,
    //     success: function(result) {
    //         console.log(result);
    //     },
    //     error: function() {
    //         console.log("error");
    //     }
    // });
}

function add(entity, data) {
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: base_url + entity,
        data: data,
        success: function(result) {
            console.log(result);
        },
        error: function() {
            console.log("error");
        }
    });
}

function get_by_id(entity, id) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: base_url + entity + "/" + id,
        success: function(result) {
            console.log(result);
        },
        error: function() {
            console.log("error");
        }
    });
}

function delete_by_id(entity, id) {
    $.ajax({
        type: "DELETE",
        dataType: "json",
        url: base_url + entity + "/" + id,
        success: function(result) {
            console.log(result);
        },
        error: function() {
            console.log("error");
        }
    });
}

function update_by_id(entity, id, data) {
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: base_url + entity + "/" + id,
        data: data,
        success: function(result) {
            console.log(result);
        },
        error: function() {
            console.log("error");
        }
    });
}