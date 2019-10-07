function login(username, password) {
    endpoint = $("#apiendpoint").text();
    $.ajax({
		url: endpoint,
		type: "POST",
		data: JSON.stringify({action:"Core.Login", inparams:{username: username, password: password}}),
		dataType: "json",
		success: function(response) {},
		error: function(error) {
			console.log("Error on Core.Login: ", error);
		}
	});
}

$(document).ready(function(){
    username = $("#username").val();
    password = $("#password").val();
    $("#login_button").click(function(){
        login(username, password);
    })
})