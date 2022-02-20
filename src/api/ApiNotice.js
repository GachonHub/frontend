import {apiRequest, apiDataRequest} from "./ApiCommon.js"

export function createNotice(form, method) {
    return apiDataRequest(method, "/api/posts/notice", form)
        .then(res => {
            console.log(res);
            })
        .catch(err => {
            console.log(err);
        })
}

export function readNoticeList(page) {
    return apiRequest("GET", "/api/posts/notice?page=" + (parseInt(page) - 1))
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}

export function readNotice(id) {
    return apiRequest("GET","/api/posts/notice/" + parseInt(id))
    .then(res => {
        return res.data;
    })
    .catch(() => {
        alert("존재하지 않는 게시글입니다.");
    })
}

export function deleteNotice(id) {
    return apiRequest("DELETE", "/api/posts/notice/" + id)
    .then(res => {
        console.log(res.data.status);
    })
    .catch(err => {
        console.log(err.message);
    })
}