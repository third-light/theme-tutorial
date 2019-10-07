switch (scope.ApiRequest.Action) {
case "addLikes":
    try {
        res = store.Increment("assets.likes."+scope.ApiRequest.Params.assetId, 1)
        console.log("Number of likes after incrementing it: ", res)
        scope.ApiResponse = res
    } catch(e) {
        console.log("Error on store.increment: ", e)
        scope.ApiError = e
    }
    break;
}