function addLikes(assetId) {
    endpoint = apiEndpoint()
	$.ajax({
		url: endpoint,
		type: "POST",
		data: JSON.stringify({action:"addLikes", inparams:{assetId: assetId}}),
		dataType: "json",
		success: function(response) {
			$("#like_label").text(response.outParams.Value);
		},
		error: function(error) {
			console.log("Error on addLikes: ", error);
		}
	});
}

function getLikes(assetId) {
    endpoint = apiEndpoint()
	$.ajax({
		url: endpoint,
		type: "POST",
		data: JSON.stringify({action:"getLikes", inparams:{assetId: assetId}}),
		dataType: "json",
		success: function(response) {
			$("#like_label").text(response.outParams.Value);
		},
		error: function(error) {
			console.log("Error on getLikes: ", error);
		}
	});
}

function apiEndpoint() {
    return $("#apiendpoint").text();
}

$(document).ready(function(){
    assetId = $("#like_button").val();
    $("#like_button").click(function(){
        addLikes(assetId);
    })
	getLikes(assetId);
	
	$("#resetLikes").click(function(){
	    assetId = $("#reset_button").val();
		resetLikes(assetId);
	})
})

function resetLikes(assetId) {
	console.log("resetlikes is called")
    endpoint = apiEndpoint()
	$.ajax({
		url: endpoint,
		type: "POST",
		data: JSON.stringify({action:"resetLikes", inparams:{assetId: assetId}}),
		dataType: "json",
		success: function(response) {
			$("#like_label").text(0);
		},
		error: function(error) {
			console.log("Error on getLikes: ", error);
		}
	});
}