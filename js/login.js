function login(username, password) {
    console.log("Called login");
    endpoint = $("#apiendpoint").text();
    console.log("Endpoint : ", endpoint);
    console.log("username : ", username, " , password: ", password);
    $.ajax({
		url: endpoint,
		type: "POST",
		data: JSON.stringify({action:"Core.Login", inparams:{username: username, password: password}, isUser: true}),
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
    $("#login_button").click(function(){
        username = $("#username").val();
        password = $("#password").val();
        console.log("Calling login with : ", username, password);
        login(username, password);
        location.reload(true);
    })
})