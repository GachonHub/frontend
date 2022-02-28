import {apiRequest} from "./ApiCommon.js"

export function getCommitRank() {
    return apiRequest("GET", "/api/github/rank")
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}

export function getUserCommits() {
    return apiRequest("GET", "/api/github/repos")
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err.message);
    })
}

export function getGroupCommits(id) {
    return apiRequest("GET", "/api/github/team/repos?team=" + id)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err.message);
    })
}