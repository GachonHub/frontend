
import {apiRequest} from "./ApiCommon.js"

export function getQuestion(page) {
    return apiRequest("GET", "/api/posts/question/" + (parseInt(page)))
    .then(res => {
        return res.data;
    })

}