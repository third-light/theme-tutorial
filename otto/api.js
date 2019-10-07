switch (scope.ApiRequest.Action) {
    case "addLikes":
        try {
            res = store.Increment("assets.likes."+scope.ApiRequest.Params.assetId, 1)
            scope.ApiResponse = res
        } catch(e) {
            scope.ApiError = e
        }
        break;
    case "getLikes":
        try {
            res = store.Get("assets.likes."+scope.ApiRequest.Params.assetId)
            scope.ApiResponse = res
        } catch(e) {
            scope.ApiError = e
        }
        break;
}