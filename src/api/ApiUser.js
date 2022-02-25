import {apiDataRequest} from "./ApiCommon.js";


export function updateUserInfo(major, graduate, sns) {
    
    var list = {
        major : major,
        graduate : (graduate=='졸업') ? true : false,
        sns : sns
    }
    return apiDataRequest("PUT", "/api/me", list)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}

export function updateUserMainRepos(list) {
    return apiDataRequest("PUT", "/api/me/repos", {repos : list})
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}