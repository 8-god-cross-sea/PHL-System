$('#add-save').click(function() {
	console.log("saved");

	var data = {
		"name": $('#add-name').val(),
		"id": $('#add-id').val(),
		"desc": $('#add-desc').val()
	}

	DEMO.data.change(data)
    .then(function(data){
        console.log(data);
        $('#example2').DataTable().ajax.reload();
        $("#modal-add").modal('hide');

    })
    .catch(function(data) {
        console.log(data);
        $('#example2').DataTable().ajax.reload();
        $("#modal-add").modal('hide');

        return;
    });
})

$('#edit-save').click(function() {
	console.log("saved");

	var data = {
		"name": $('#add-name').val(),
		"id": $('#add-id').val(),
		"desc": $('#add-desc').val()
	}

	DEMO.data.change(data)
    .then(function(data){
        console.log(data);
        $('#example2').DataTable().ajax.reload();
        $("#modal-add").modal('hide');

    })
    .catch(function(data) {
        console.log(data);
        $('#example2').DataTable().ajax.reload();
        $("#modal-add").modal('hide');

        return;
    });
})

$('#example2').on( 'click', 'tr', function () {
	console.log($(this).children('td')[1].innerText);
	console.log($(this).children('td')[2].innerText);
	console.log($(this).children('td')[3].innerText);
	$('#edit-name').val($(this).children('td')[1].innerText);
	$('#edit-id').val($(this).children('td')[2].innerText);
	$('#edit-desc').val($(this).children('td')[3].innerText);


    $("#modal-edit").modal('show');
    $(this).toggleClass('selected');
} );