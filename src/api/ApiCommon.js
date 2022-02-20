import axios from 'axios';
import { API_BASE_URL } from '../constants';
import { AUTHORIZATION } from '../constants';

function headers() {
    const headers = {
        "Content-Type" : "application/json"
    };
    if(localStorage.getItem(AUTHORIZATION) != null) {
        headers[AUTHORIZATION] = "Bearer " + localStorage.getItem(AUTHORIZATION);
    }

    return headers;
}

function formDataHeaders() {
    const headers = {
        "Content-Type" : "multipart/form-data"
    };
    if(localStorage.getItem(AUTHORIZATION) != null) {
        headers[AUTHORIZATION] = "Bearer " + localStorage.getItem(AUTHORIZATION);
    }

    return headers;
}



export async function apiRequest(method, url) {

    return await axios({
        method: method,
        url : API_BASE_URL + url, 
        headers: headers()
    })
    .then(res => {
        return res.data;
    })
}

export async function apiDataRequest(method, url, params, form="json") {

    return await axios({
        method: method,
        url: API_BASE_URL +  url,
        data: params,
        headers: (form=="json") ? headers() : formDataHeaders()
    })
    .then(res => {
        console.log("log : " + res);
    })


}
