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

    return {"headers" : headers};
}


export async function apiGetRequest(url) {

    
    /* eslint-disable no-console */ 
    console.log(headers());

    return await axios.get(API_BASE_URL + url, headers())
    .then(res => {
        return res.data;
    })

}

export async function apiPostRequest(url, params) {

    return await axios.post(API_BASE_URL + url, headers(), params)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })

}


export async function apiPutRequest(url, params) {

    return await axios.put(API_BASE_URL + url, headers(), params)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })

}



export async function apiDeleteRequest(url) {

    return await axios.delete(API_BASE_URL + url, headers())
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })

}

