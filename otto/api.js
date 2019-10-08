switch (scope.ApiRequest.Action) {
    case "addLikes":
        try {
            res = store.Increment("assets.likes." + scope.ApiRequest.Params.assetId, 1)
            scope.ApiResponse = res
        } catch (e) {
            scope.ApiError = e
        }
        break;
    case "getLikes":
        try {
            res = store.Get("assets.likes." + scope.ApiRequest.Params.assetId)
            scope.ApiResponse = res
        } catch (e) {
            scope.ApiError = e
        }
        break;
    case "resetLikes":
        if (typeof scope.userDetails == 'undefined')
        {
            scope.ApiError = "resetLikes can only be used by authenticated users"
            return
        }
        try {
            res = store.Delete("assets.likes." + scope.ApiRequest.Params.assetId)
            scope.ApiResponse = res
        } catch (e) {
            scope.ApiError = e
        }
        break;
}