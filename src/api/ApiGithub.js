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