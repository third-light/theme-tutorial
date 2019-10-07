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
    endpoint = $("#apiendpoint").text();
    console.log("apiEndpoint: ", endpoint);
    return endpoint;
}

$(document).ready(function(){
    assetId = $("#like_button").val();
    $("#like_button").click(function(){
        addLikes(assetId);
    })
    getLikes(assetId);
})
