function login(username, password) {
    console.log("Called login");
    endpoint = $("#apiendpoint").text();
    console.log("Endpoint : ", endpoint);
    $.ajax({
		url: endpoint,
		type: "POST",
		data: JSON.stringify({action:"Core.Login", inparams:{username: username, password: password}}),
		dataType: "json",
		success: function(response) {
            console.log("Login successful");
        },
		error: function(error) {
			console.log("Error on Core.Login: ", error);
		}
	});
}

$(document).ready(function(){
    username = $("#username").val();
    password = $("#password").val();
    $("#login_button").click(function(){
        console.log("Calling login");
        login(username, password);
    })
})