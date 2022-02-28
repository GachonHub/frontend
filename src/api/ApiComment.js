import {apiRequest, apiDataRequest} from "./ApiCommon.js"

export function createComment(method, comment, questionId, id=null) {
    if (method == "PUT") {
        var form = {
            id : id,
            content : comment,
            questionId : questionId
        }
    } else {
        form = {
            content : comment,
            questionId : questionId
        }
    }

    return apiDataRequest(method, "/api/comments", form)
    .then(res => {
        return res;
    })
    .catch(err => {
        console.log(err.message);
    })
}

export function deleteComment(id) {
    return apiRequest("DELETE", "/api/comments/" + id)
    .then(res => {
        return res;
    })
    .catch(err => {
        console.log(err.message);
    })
}
