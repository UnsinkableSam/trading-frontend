import axios from 'axios';
import TokenComponent from './TokenComponent';


export const handleError = e => {
    if (e.response) {
        return e.response.data.errors.detail
    }

    return 'something went wrong'
};

const Api = ({
    "apiUrl": process.env.REACT_APP_BACKEND_URL || 'https://trading-backend.sam-corp.me/',
    "header": { 'Content-Type': 'application/json; charset=utf-8' },
})

Api.interceptors.request.use(
    request => {
        const token = TokenComponent.getToken();
        if (token) {
            request.headers['x-access-token'] = token
        }
        return request
    },

    error => Promise.reject(error),
)




Api.interceptors.response.use(undefined, error => {
    const err = handleError(error)
    const jwtErrors = ['signature', 'jwt', 'token']
    TokenComponent.removeToken();
    return {
        error: true,
        message: err
    };
})