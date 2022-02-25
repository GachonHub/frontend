import {apiRequest, apiDataRequest} from "./ApiCommon.js";

export function getUserInfo(id) {

    return apiRequest("GET", "/api/me?id=" + id)
    .then(res => {
        console.log(res.data);
        var list = res.data;
        return list;


    })
    .catch(err => {
        console.log(err.message);
        if (err.response.status == 401) {
            alert("로그인을 해주세요.");
            this.$router.push("/");
        }
    })
}


export function updateUserInfo(major, graduate, sns, repos) {
    
    var list = {
        major : major,
        graduate : (graduate=='졸업') ? true : false,
        sns : sns,
        repos : repos
    }
    return apiDataRequest("PUT", "/api/me", list)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}
