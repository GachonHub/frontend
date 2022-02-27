
import {apiRequest, apiDataRequest} from "./ApiCommon.js"

export function getQuestion(page) {
    return apiRequest("GET", "/api/posts/question/" + (parseInt(page)))
    .then(res => {
        return res.data;
    })

}

export function createQuestion(files, form, method) {

    var data = new FormData();
    if (method == "PUT") {
        data.append("id", this.$route.params.id);
    }

    data.append("title", form.title);
    data.append("content", form.content);
    data.append("category", form.category);
    data.append("files", files[0]);

    return apiDataRequest(method, "/api/posts/question", data, "form")
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
    
}
