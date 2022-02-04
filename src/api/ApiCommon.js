import axios from 'axios';
import { API_BASE_URL } from '../constants';
import { AUTHORIZATION } from '../constants';
import { REFRESH } from '../constants';

export const instance = axios.create ({
    baseURL: API_BASE_URL,
    headers: {
        AUTHORIZATION: localStorage.getItem(AUTHORIZATION),
        REFRESH: localStorage.getItem(REFRESH)
    }
})
