function login(username, password) {
    endpoint = $("#apiendpoint").text();
    $.ajax({
		url: endpoint,
		type: "POST",
		data: JSON.stringify({action:"Core.Login", inparams:{username: username, password: password}, isUser: true}),
		dataType: "json",
		success: function(response) {
            location.reload(true);
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
        login(username, password);
    })
})