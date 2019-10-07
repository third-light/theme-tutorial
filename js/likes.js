function addLikes(assetId) {
    endpoint = apiEndpoint()
    console.log("Endpoint: ", endpoint);
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

function apiEndpoint() {
    return $("#apiendpoint").text();
}

$(document).ready(function(){
    $("#like_button").click(function(){
        assetId = $("#like_button").val();
        addLikes(assetId);
    })
})
