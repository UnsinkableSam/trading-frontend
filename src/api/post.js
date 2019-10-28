import axios from 'axios';
const DETAULT_URL = process.env.REACT_APP_BACKEND_URL || 'https://trading-backend.sam-corp.me';

export const handleError = (e) => {
    if (e.response) return e.response.data.errors.detail;

    return 'Could not reach the server';
};

export const post = (data, url, type) =>
    axios[type](DETAULT_URL + url, data)
        .then((res) => res.data.data)
        .catch((e) => console.log(e));

export const postMoney = (data, url, type) =>
    axios[type](DETAULT_URL + url, data)
        .then((res) => res.data)
        .catch((e) => console.log(e));

