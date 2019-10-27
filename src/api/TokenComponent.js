
import jwt_decode from 'jwt-decode'
const token_name = 'user_token';
const userId = 'id';

const TokenComponent = {
    getToken: () => localStorage.getItem(token_name),
    getUserId: () => localStorage.getItem(userId),
    removeToken: () => localStorage.removeItem(token_name),
    setToken: token => localStorage.setItem(token_name, token),
    setUserId: token => localStorage.setItem(userId, token),
    decodeToken: () => jwt_decode(TokenComponent.getToken()),
    handleLogin: (token, id) => {
        TokenComponent.setToken(token)
        TokenComponent.setUserId(id)
        window.location.assign('/account')
    }
}

export default TokenComponent