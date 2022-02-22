import {apiDataRequest, apiRequest} from "./ApiCommon.js"


export function createGroup(form, image, type) {
    var data = new FormData();
    console.log("dasta==============");
    console.log(image);
    if (image.length > 0) {
        data.append('image', image[0]);
    }
    data.append('name', form.name);
    data.append('field', form.field);
    data.append('people', form.people);
    data.append('repos', form.repos);
    if (form.recruit != undefined) {
        data.append("recruiting", form.recruit);
    } else {
        data.append("recruiting", "false");
    }
    data.append('description', form.description);
    data.append('type', type.toUpperCase());

    return apiDataRequest("POST", "/api/groups", data, "form")
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