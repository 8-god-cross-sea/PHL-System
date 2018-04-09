var base_url = "https://phls.herokuapp.com/api/";
var description = {
    "case": {
        "header": "病例学习",
        "description": "用于学习病例",
        "data": [{
            "column": "id",
            "description": "病例ID"
        }, {
            "column": "name",
            "description": "病例名称"
        }]
    },
}

function get_list(entity, useFunctionLabel) {
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
            if (useFunctionLabel)
            {
                thead += "<th>操作 " + get_a_label('add_table', '+', [entity]) + "</th></tr>";
            }

            var tbody = "";
            for (var i = 0; i < result["objects"].length; i++) {
                var id = result["objects"][i]["id"];
                tbody += "<tr id=\"" + entity + "_" + id + "\">";
                for (var j = 0; j < info.length; j++) {
                    tbody += "<td><a href='#' onClick='get_rich_text_list('entity,"+ j + "')'>" + result["objects"][i][info[j]["column"]] + "</a></td>";
                }
                if (useFunctionLabel)
                {
                    tbody += "<td>" + get_a_label('delete_by_id', '删除', [entity, id]) +
                        get_a_label('update_table', '修改', [entity, id]) + "</td></tr>";
                }
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

function get_rich_text_list(entity, id) {
    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: "json",
        url: base_url + entity + "/"+ id,
        xhrFields: {
            withCredentials: true
        },
        success: function (result) {
            document.getElementById("reception").innerHTML = result["objects"][0]["reception"];
            document.getElementById("inspection").innerHTML = result["objects"][0]["inspection"];
            document.getElementById("result").innerHTML = result["objects"][0]["result"];
            document.getElementById("treatment").innerHTML = result["objects"][0]["treatment"];
        },
        error: function () {
            console.log("error");
        }
    });
}