import {apiRequest, apiDataRequest} from "./ApiCommon.js";

export function getInquiryList(page) {
    return apiRequest("GET", "/api/posts/inquiry?page=" + (parseInt(page) - 1))
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}

export function getInquiry(id) {
    return apiRequest("GET", "/api/posts/inquiry/" + id)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}

export function createInquiry(image, form, method, id=null) {
    var rm = new FormData();
    if (method == "PUT") {
        rm.append("id", id);
    }
    rm.append("file", image[0]);
    rm.append("title", form.title);
    rm.append("content", form.content);
    if (form.secret == true) {
        rm.append("secret", true);
        rm.append("password", form.password);
    } else {
        rm.append("secret", false);
    }
    return apiDataRequest(method, "/api/posts/inquiry", rm)
    .then(res => {
        return res;
    })
    .catch(err => {
        console.log(err);
    })
}

export function deleteInquiry(id) {
    return apiRequest("DELETE", "/api/posts/inquiry/" + id)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}