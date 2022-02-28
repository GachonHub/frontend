import {apiDataRequest, apiRequest} from "./ApiCommon.js"


export function createGroup(method, title, field, people, orgName, description, type) {
    var data = {
        name : title,
        field : field,
        people : people,
        orgName : orgName,
        description : description,
        type : type.toUpperCase(),
        recruiting : false
    };

    return apiDataRequest(method, "/api/groups", data)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err.message);
    })
    
}

export function updateGroup(id, field, people, description, recruiting, recruitContent, mainRepos) {
    
    var data = {
        teamId : id,
        field : field,
        people : people,
        description : description,
        recruiting : recruiting,
        recruitContent : recruitContent,
        repos : mainRepos
    };

    return apiDataRequest("PUT", "/api/groups", data)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err.message);
    })
    
}

export function getGroupList(type, page) {
    return apiRequest("GET", "/api/groups?type=" + type + "&page=" + (parseInt(page) - 1))
    .then(res => {
        return res;
    })
}

export function deleteGroup(id) {
    return apiRequest("DELETE", "/api/groups/" + id)
    .then(res => {
        return res;
    })
    .catch(err => {
        console.log(err);
    })
}

export function getGroup(id) {
    return apiRequest("GET", "/api/groups/" + id)
    .then(res => {
        return res;
    })
}

export function addMember(userId, teamId) {
    var list = {
        memberId : userId,
        teamId : teamId
    };

    return apiRequest("POST", "/api/groups/member", list)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err.message);
    })

}

export function managingMember(method, userId, teamId) {

    return apiRequest(method, "/api/groups/member?user=" + userId + "&team=" + teamId)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err.message);
    })

}