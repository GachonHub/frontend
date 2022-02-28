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
    apiRequest("GET", "/api/github/repos")
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err.message);
    })
}