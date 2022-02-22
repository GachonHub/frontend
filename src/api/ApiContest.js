import {apiRequest, apiDataRequest} from "./ApiCommon.js";

export function getContestList(page) {
    return apiRequest("GET", "/api/posts/contest?page=" + (parseInt(page) - 1))
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })

}

export function getContest(id) {
    return apiRequest("GET", "/api/posts/contest/" + id)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })

}

export function getContestListById(id) {
    return apiRequest("GET", "/api/posts/contest/list/" + id)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}

export function createContest(form, image, method) {
    var data = new FormData();
    if (method == "PUT") {
        data.append("id", form.id);
    }
    data.append("title", form.title);
    data.append("content", form.content);
    data.append("image", image[0]);
    data.append("category", form.category);
    return apiDataRequest(method, "/api/posts/contest", data, "form")
    .then(res => {
        return res;
    })
    .catch(err => {
        console.log(err);
    })

}

export function deleteContest(id) {
    return apiRequest("DELETE", "/api/posts/contest/" + id, "form")
    .then(res => {
        this.$route.back();
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })

}